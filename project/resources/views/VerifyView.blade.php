<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Document</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        body{
            background: rgb(228, 228, 228);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container{
            background: white;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: fit-content;
        }
        .logo{
            display :flex;
            justify-content:center;
        }
        .logo img{
            width: 100px;
            height:100px;
        }
        .icon{
            width: 100%;
            height:10vh;
            background:rgb(239, 61, 61);
        }
        .container-h1{
            margin-block: 1.5rem;
            margin-inline: 1.4rem;
        }
        .c1{
            margin-inline: 1.4rem;
        }
        .verify-btn{
            margin-block: 2rem;
            margin-inline:auto;
        }
        .verify-btn p{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 200px;
            height: 30px;
            border-radius: 6px;
            background-color:rgb(239, 61, 61) ;
            color:white;
            font-size: 1.3rem;
            letter-spacing: 5px;
        }
        .line{
            border-top:1px solid rgb(239, 61, 61);
            width: 85%;
            margin-bottom: 1.5rem;
            margin-inline:auto;
        }
        .icons{

        }
        .c2{
            display:flex;
            flex-direction:column;
            align-items:center;
            gap: 20px;
        }
        .c2 p{
            color:rgb(73, 72, 72);
        }
        .c2 h6{
            font-size: .8rem;
            padding-bottom:20px ;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo"><img src="https://i.ibb.co/rcR6s8C/logo.png" alt="logo"/></div>
        <div class="icon"><i class="fa-sharp fa-light fa-envelope"></i></div>
        <div class="container-h1"><h1>Email verification</h1></div>
        <div class="c1">
            <p>HI ${first_name}</p>
            <p>You're almost set to start enjoying ${company name}. Simply click the link belew
                to verify your email address and get started. The link expires in 48 hours.</p>
        </div>
        <div class="verify-btn"><p>{{ $code }}</p></div>
        <div class="line"></div>
        <div class="icons"></div>
        <div class="c2">
            <p>800 Broadway Suit 1500 New York, NY 000423, USA</p>
            <h6>| Privacy Policy | Contact Details |</h6>
        </div>
    </div>
</body>
</html>
