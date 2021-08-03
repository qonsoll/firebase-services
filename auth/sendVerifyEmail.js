import auth from './'

const sendVerifyEmail = () => auth.currentUser.sendEmailVerification()

export default sendVerifyEmail
