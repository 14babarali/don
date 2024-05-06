import { app } from './app.js'


process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1); // Exit the process to avoid running in a faulty state
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  process.exit(1); // Exit the process to avoid running in a faulty state
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    `  ${process.env.DEV_MODE} MedLocate Server Running On port ${PORT}`.bgCyan
      .white
  );
});
