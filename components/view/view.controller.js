const catchAsync = require("../../utils/catchAsync");

exports.getLandingPage = catchAsync(async (req, res, next) => {
  res.status(200).render("index", {
    title: "Home",
  });
});

exports.getLoginPage = catchAsync(async (req, res, next) => {
  res.status(200).render("signup-login/login", {
    title: "Login",
  });
});

exports.getSignupPage = catchAsync(async (req, res, next) => {
  res.status(200).render("signup-login/signup", {
    title: "Signup",
  });
});

exports.getAdminDashboardPage = catchAsync(async (req, res, next) => {
  res.status(200).render("dashboard/admin_dash/index", {
    title: "Admin Dashboard",
  });
});

exports.getUserDashboardPage = catchAsync(async (req, res, next) => {
  res.status(200).render("dashboard/user_dash/index", {
    title: "User Dashboard",
  });
});

exports.getUserSettingsPage = catchAsync(async (req, res, next) => {
  res.status(200).render("dashboard/user_dash/settings", {
    title: "User Settings",
  });
});

exports.getPaymentPage = catchAsync(async (req, res, next) => {
  res.status(200).render("payment/index", {
    title: "Payment",
  });
});

exports.get404Page = catchAsync(async (req, res, next) => {
  res.status(200).render("error/404", {
    title: "Error",
  });
});
