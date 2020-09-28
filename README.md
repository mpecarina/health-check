# health-check

configurable http liveness and readiness checks for kubernetes deployments

```sh
export READY_CMD="adb shell cat /data/local/tmp/done"
export LIVE_CMD="adb shell dumpsys window windows | grep -i  mCurrentFocus | grep -i null | head -1 | wc -l"
export READY_OUTPUT_CONTAINS="1"
export LIVE_OUTPUT_CONTAINS="0"
export READY_FAILURE_MSG="android emulator service is not ready"
export LIVE_FAILURE_MSG="android emulator service is not healthy"
```
