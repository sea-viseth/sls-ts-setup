import log from '../utils/logging';

export default async (event: any) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v3.0! Your function executed successfully!',
        },
        null,
        2
      )
    };
  } catch (error) {
    log.error(error);
  }

};
