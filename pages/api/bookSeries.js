import dbConnect from '../../lib/mongo';
import BookSeries from '../../models/BookSeries';

export default async function handler(req, res) {
  await dbConnect();

  const bookSeries = await BookSeries.find({});
  res.status(200).json(bookSeries);
}
