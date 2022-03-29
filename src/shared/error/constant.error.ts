export const VndError = {

  USER_UNAUTHORIZED_ERROR: 'USER_UNAUTHORIZED_ERROR', // tài khoản người dùng đăng nhập không đúng
  USER_CONFLICT_ERROR: 'USER_CONFLICT_ERROR', //  tài khoản người dùng đã tồn tại
  USER_REJECT_LOAN_ERROR: 'USER_REJECT_LOAN_ERROR', // tài khoản người dùng bị từ chối tạo khoản vay
  USER_NOT_FOUND_ERROR: 'USER_NOT_FOUND_ERROR', // tài khoản người dùng không tìm thấy trong hệ thống
  USER_SUBMIT_INCOMPLETE_ERROR: 'USER_SUBMIT_INCOMPLETE_ERROR', //     submit thông tin bị thiếu
  USER_SUBMIT_DUPLICATE_ERROR: 'USER_SUBMIT_DUPLICATE_ERROR', // submit thông tin bị trùng lặp với nhau
  USER_OTP_NOT_RECEIVE_ERROR: 'USER_OTP_NOT_RECEIVE_ERROR', // không nhận được OTP từ hệ thống
  USER_OTP_NOT_MATCH_ERROR: 'USER_OTP_NOT_MATCH_ERROR', // OTP không khớp với hệ thống
  USER_OTP_EXPIRED_TIME: 'USER_OTP_EXPIRED_TIME', // OTP hết hạn
  USER_REJECT_LOAN_ALREADY_ID_CARD_ERROR: 'USER_REJECT_LOAN_ALREADY_ID_CARD_ERROR', // Người dùng đã đăng ký vay bằng cmnd/cccd này
  USER_BLOCK_LIST_ERROR: 'USER_BLOCK_LIST_ERROR', // tài khoản người dùng trong danh sách đen
  USER_LOANCREDIT_NOT_FOUND_ERROR: 'USER_LOANCREDIT_NOT_FOUND_ERROR', // không tìm thấy mã khoản vay
  USER_IS_UNDER_REQUIRED_AGE: 'USER_IS_UNDER_REQUIRED_AGE',
  USER_CALL_DURATION_ERROR: 'USER_CALL_DURATION_ERROR', // hen lich goi khong thanh cong
  USER_REQUEST_AI_SCORE_ERROR: 'USER_REQUEST_AI_SCORE_ERROR', // khong nhan dc response tu AI
  USER_UPDATE_INFO_ERROR: 'USER_UPDATE_INFO_ERROR', //     UPDATE thông tin bị khong thanh cong
  USER_CREATE_ACCOUNT_ERROR: 'USER_UPDATE_INFO_ERROR', //     Tao tai khoan ko thanh cong



  USER_HAS_NO_LOANCREDIT:'USER_HAS_NO_LOANCREDIT',
  USER_LOANCREDIT_CREATE_ERROR: 'USER_LOANCREDIT_CREATE_ERROR', // không thể tạo khoản vay
  USER_FEATURE_BEING_DEVELOP_ERROR: 'USER_FEATURE_BEING_DEVELOP_ERROR', // không thể tạo khoản vay
  USER_AI_CANCEL_IN_BLACKLIST: 'AI_CANCEL_IN_BLACKLIST', //User nằm trong blacklist 
  USER_AI_CANCEL_IN_APPRAISING: 'AI_CANCEL_IN_APPRAISING', //User đang có một khoản vay đang duyệt 
  USER_AI_CANCEL_IN_DEBT: 'AI_CANCEL_IN_DEBT', //User đang có một khoản vay đã giải ngân nhưng chưa đến hạn trả
  USER_AI_CANCEL_LOW_SCORE: 'AI_CANCEL_LOW_SCORE', //Credit score thấp hơn ngưỡng cho phép 
  USER_AI_CANCEL_NOT_IN_SYSTEM: 'AI_CANCEL_NOT_IN_SYSTEM', //Thông tin user cung cấp không có trong hệ thống 
  USER_AI_CANCEL_NOT_VERIFIED:'AI_CANCEL_NOT_VERIFIED', //Tên và cmt đăng ký không trùng với sdt
  USER_AI_CANCEL_IMG_IN_BLACKLIST: 'AI_CANCEL_IMG_IN_BLACKLIST', //Ảnh chân dung nằm trong blacklist 
  USER_AI_CANCEL_RELATIVE_LOW_SCORE: 'AI_CANCEL_RELATIVE_LOW_SCORE', //Credit score của người thân không đạt
  USER_AI_CANCEL_RELATIVE_IN_BLACKLIST: 'AI_CANCEL_RELATIVE_IN_BLACKLIST', //Người thân trong blacklist 
  USER_EKYC_ID_NUMBERS_UNMATCHED_ERROR: 'USER_EKYC_ID_NUMBERS_UNMATCHED_ERROR', // tài khoản ekyc số chứng minh/ căn cước công dân không khớp với số tạo tài khoản.
  USER_EKYC_FACES_UNMATCHED_ERROR: 'USER_EKYC_FACES_UNMATCHED_ERROR', // tài khoản ekyc có khuôn mặt không khớp với ảnh trong chứng minh/căn cước công dân
  USER_EKYC_FRONT_UNDETECTED_ERROR: 'USER_EKYC_FRONT_UNDETECTED_ERROR', // tài khoản có ekyc mặt trước của chứng minh/căn cước công dân không thể nhận diện
  USER_EKYC_BACK_UNDETECTED_ERROR: 'USER_EKYC_BACK_UNDETECTED_ERROR', //tài khoản ekyc có mặt sau của chứng minh/căn cước công dân không thể nhận diện
  USER_EKYC_SELFIE_UNDETECTED_ERROR: 'USER_EKYC_SELFIE_UNDETECTED_ERROR', // tài khoản ekyc có khuôn mặt không thể nhận diện
  USER_EKYC_FRONT_BACK_UNDETECTED_ERROR: 'USER_EKYC_FRONT_BACK_UNDETECTED_ERROR', // tài khoản ekyc có mặt trước và mặt sau của chứng minh/căn cước công dân không thể nhận diện
  USER_EKYC_FRONT_SELFIE_UNDETECTED_ERROR: 'USER_EKYC_FRONT_SELFIE_UNDETECTED_ERROR', // tài khoản ekyc có mặt trước chứng minh/căn cước công dân và khuôn mặt không thể nhận diện
  USER_EKYC_SELFIE_BACK_UNDETECTED_ERROR: 'USER_EKYC_SELFIE_BACK_UNDETECTED_ERROR', //  tài khoản ekyc có khuôn mặt và mặt sau chứng minh/căn cước công dân không thể nhận diện
  USER_EKYC_ALL_INFORMATION_UNDETECTED_ERROR: 'USER_EKYC_ALL_INFORMATION_UNDETECTED_ERROR', //  tài khoản ekyc không thể nhận diện được bất cứ thông tin nào
  USER_EKYC_LIVENESS_ERROR: 'USER_EKYC_LIVENESS_ERROR', //  tài khoản ekyc không thể nhận diện được liveness
  USER_EKYC_FRONT_BACK_LIVENESS_ERROR: 'USER_EKYC_FRONT_BACK_LIVENESS_ERROR',  // tài khoản ekyc có mặt trước, mặt sau chứng minh/căn cước công dân và liveness không thể nhận diện
  USER_EKYC_FACE_NOT_FOUND_ERROR : 'USER_EKYC_FACE_NOT_FOUND_ERROR',  // tài khoản ekyc có  khuôn mặt không thể nhận diện
  USER_EKYC_FRONT_SELFIE_LIVENESS_ERROR : 'USER_EKYC_FRONT_SELFIE_LIVENESS_ERROR',  // tài khoản ekyc có mặt trước chứng minh/căn cước công dân và và khuôn mặt và liveness không thể nhận diện
  USER_EKYC_BACK_SELFIE_LIVENESS_ERROR : 'USER_EKYC_BACK_SELFIE_LIVENESS_ERROR', // tài khoản ekyc có mặt trước chứng minh/căn cước công dân và và khuôn mặt và liveness không thể nhận diện
  USER_EKYC_MORE_FACE_ERROR: 'USER_EKYC_MORE_FACE_ERROR', // tài khoản ekyc có nhiều hơn một khuôn mặt
  USER_EKYC_FULLNAME_UNMATCHED_ERROR: 'USER_EKYC_FULLNAME_UNMATCHED_ERROR', // tài khoản ekyc có tên dầy đủ khác với tên tạo tài khoản
  USER_NOT_NULL_ERROR: 'USER_NOT_NULL_ERROR', // tài khoản không được null
  USER_TOKEN_EXPIRED_ERROR: 'USER_TOKEN_EXPIRED_ERROR', // tài khoản hết hạn phiên đăng nhập

}

export const VndErrorType = {
  USER_UNAUTHORIZED_ERROR: {
    message: 'Username or password incorrect.',
    statusCode: 401
  },
  USER_CONFLICT: {
    message: 'Username does already exist.',
    statusCode: 409
  },
  USER_NOT_FOUND: {
    message: 'User does not exist.',
    statusCode: 404
  }
}