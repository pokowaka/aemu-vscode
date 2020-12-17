import * as cp from "child_process";
import { config } from "./config";

function exec(
  command: string,
  options: cp.ExecOptions = {}
): Promise<{ stdout: string; stderr: string }> {
  return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
    cp.exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject({ error, stdout, stderr });
      }
      resolve({ stdout, stderr });
    });
  });
}

async function launch(avd: string) {
  return exec(
    `${config.emulatorPath} -avd ${avd} -netdelay none -netspeed full -qt-hide-window -grpc-use-token -idle-grpc-timeout 300 &`
  );
}
