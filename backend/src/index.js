const PORT = process.env.PORT || 3000;
import app from './app';

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});