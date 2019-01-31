import request from '../../request';
const apiHost = process.env.API_ENDPOINT

exports.getGiftCard = async (req) => {
  const cookie = req.headers.cookie
  const opts = {
    headers: { Cookie: cookie }
  }
  const response = await request(apiHost + `/api/gift-card/code/${req.params.id}`, opts)

  if (!response.result && response.error) {
    return {
      error: {
        status: response.error.status,
        message: response.error.message
      }
    }
  }
  return response.result
};
