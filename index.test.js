const { on, emit } = require('./index');

const unsubscribeA = on('A', arg => {
  if (arg === true) console.log('emit A', arg);
  else throw ('arg is incorrect');
});

on('B', arg => {
  if (typeof (arg) === 'number') console.log('emit B', arg);
  else throw ('arg is incorrect');
});

emit('A', true);

for (let i = 0; i < 10; i++) {
  emit('B', i);
}

unsubscribeA();
emit('A', true);