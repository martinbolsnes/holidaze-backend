module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a5e5842985d4b33700ef3cd146860bec'),
  },
});
