import chalk from 'chalk';
import app from './app';

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(chalk.cyan(`Listening on port: ${port}`));
});
