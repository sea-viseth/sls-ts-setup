
import { dynamo } from '../configs/db';

const schema = new dynamo.Schema(
  {
    PK: {
      type: String,
      hashKey: true,
      required: true
    },
    SK: {
      type: String,
      rangeKey: true,
      required: true
    },
  },
  {
    saveUnknown: false,
    timestamps: true
  }
);

export default dynamo.model('wire-middleware', schema, {
  create: false,
  update: false,
  waitForActive: false
});
