import type { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';
import chalk from 'chalk';

class WorkerReporter implements Reporter {
  
  
  onTestBegin(test: TestCase, result: TestResult) {
    console.log(
      chalk.blue(`[Worker-${result.workerIndex + 1}]`) +
      ' ' +
      chalk.yellow(`START: ${test.title}`)
    );
  }

  onTestEnd(test: TestCase, result: TestResult) {
    const statusColor =
      result.status === 'passed'
        ? chalk.green
        : result.status === 'failed'
        ? chalk.red
        : chalk.gray;

    console.log(
      chalk.blue(`[Worker-${result.workerIndex + 1}]`) +
      ' ' +
      statusColor(`END: ${test.title} → ${result.status}`)
    );
    
  }
  
  onEnd(result: FullResult): Promise<{ status?: FullResult['status']; } | undefined | void> | void {
    console.log(
      chalk.green(`\nAll tests completed successfully`) + '\n' +
      chalk.blue(`Status: ${result.status}`)
    );
  }
}

export default WorkerReporter;
