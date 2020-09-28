/* eslint-disable no-unused-vars */
const { exec } = require("child_process")

const { READY_CMD, LIVE_CMD, READY_OUTPUT_CONTAINS, LIVE_OUTPUT_CONTAINS, READY_FAILURE_MSG, LIVE_FAILURE_MSG } = process.env

const execShell = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      error ? reject(error) : resolve(stdout ? stdout : stderr)
    })
  })
}

exports.ready = async (ctx) => {
  const output = await execShell(READY_CMD)
  if (output.includes(READY_OUTPUT_CONTAINS)) {
    ctx.status = 200
    ctx.body = { status: "success", msg: output }
  } else {
    ctx.status = 500
    ctx.body = { status: "error", msg: READY_FAILURE_MSG }
  }
}

exports.live = async (ctx) => {
  const output = await execShell(LIVE_CMD)
  if (output.includes(LIVE_OUTPUT_CONTAINS)) {
    ctx.status = 200
    ctx.body = { status: "success", msg: output }
  } else {
    ctx.status = 500
    ctx.body = { status: "error", msg: LIVE_FAILURE_MSG }
  }
}
