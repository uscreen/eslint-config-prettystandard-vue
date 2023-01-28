const fs = require('fs')
const path = require('path')
const { ESLint } = require('eslint')
const tap = require('tap')

const eslint = new ESLint()

const fixturePath = path.resolve(__dirname, '_fixture')

tap.test('Call eslint on javascript file with errors', async (t) => {
  const file = path.resolve(fixturePath, 'wrong')
  const results = await eslint.lintFiles([file])

  const messages = results[0].messages.map((m) => ({
    ruleId: m.ruleId,
    message: m.message,
    line: m.line
  }))

  const expectedMessages = [
    {
      ruleId: 'prettier/prettier',
      message: 'Delete `·`',
      line: 8
    },
    {
      ruleId: 'prettier/prettier',
      message: 'Delete `·`',
      line: 13
    },
    {
      ruleId: 'prettier/prettier',
      message: 'Delete `;`',
      line: 18
    },
    {
      ruleId: 'prettier/prettier',
      message: 'Replace `"one",·"two"` with `\'one\',·\'two\'`',
      line: 23
    },
    {
      ruleId: 'prettier/prettier',
      message: 'Delete `,`',
      line: 30
    },
    {
      ruleId: 'prettier/prettier',
      message: 'Replace `array,·object` with `·array,·object·`',
      line: 36
    },
    {
      ruleId: 'no-unused-vars',
      message: "'unused' is assigned a value but never used.",
      line: 41
    },
    {
      ruleId: 'no-undef',
      message: "'undef' is not defined.",
      line: 46
    }
  ]

  t.same(messages, expectedMessages, 'Got expected error messages')

  t.end()
})

tap.test('Call eslint on javascript file without errors', async (t) => {
  const file = path.resolve(fixturePath, 'correct')
  const results = await eslint.lintFiles([file])

  const messages = results[0].messages

  t.same(messages, [], 'Got no error messages')

  t.end()
})

tap.test('Call eslint on vue file with errors', async (t) => {
  const src = path.resolve(fixturePath, 'Wrong-vue')
  const file = path.resolve(fixturePath, 'Wrong.vue')
  fs.copyFileSync(src, file)

  const results = await eslint.lintFiles([file])

  fs.rmSync(file)

  const messages = results[0].messages.map((m) => ({
    ruleId: m.ruleId,
    message: m.message,
    line: m.line
  }))

  const expectedMessages = [
    {
      ruleId: 'vue/multi-word-component-names',
      message: 'Component name "Wrong" should always be multi-word.',
      line: 1
    },
    {
      ruleId: 'vue/require-v-for-key',
      message: "Elements in iteration expect to have 'v-bind:key' directives.",
      line: 7
    },
    {
      ruleId: 'vue/no-unused-vars',
      message: "'todo' is defined but never used.",
      line: 7
    }
  ]

  t.same(messages, expectedMessages, 'Got expected error messages')

  t.end()
})

tap.test('Call eslint on vue file without errors', async (t) => {
  const src = path.resolve(fixturePath, 'CorrectComponent-vue')
  const file = path.resolve(fixturePath, 'CorrectComponent.vue')
  fs.copyFileSync(src, file)

  const results = await eslint.lintFiles([file])

  fs.rmSync(file)

  const messages = results[0].messages

  t.same(messages, [], 'Got no error messages')

  t.end()
})
