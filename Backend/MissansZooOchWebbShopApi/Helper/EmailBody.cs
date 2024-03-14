namespace MissansZooOchWebbShopApi.Helper
{
    public static class EmailBody
    {
        public static string EmailStringBody(string email, string emailToken)
        {
            return $@"<html>
<head>
</head>
<body>
<div> <h1>Reset password </h1>
<a href=""http://localhost:4200/reset?email={email}&code={emailToken}"">Reset password</a>";
        }
    }
}
