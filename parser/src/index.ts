import cron from 'node-cron';

cron.schedule(
  '0 0 1 * *',
  function () {
    console.log('parser running');
  },
  { runOnInit: true },
);
