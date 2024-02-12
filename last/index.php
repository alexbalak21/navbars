<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="https://kit.fontawesome.com/6502c70df0.js" crossorigin="anonymous"></script>
    <script src="script.js" defer></script>
    <title>Navbar Responsive whith Dropdown</title>
</head>

<body>
    <div class="navigation">
        <a class="logo" href=""><img src="logo.png" /></a>
        <input type="checkbox" id="nav-toggle" />
        <label class="navbars" for="nav-toggle"><i id="nav-bars" class="fa-solid fa-bars"></i></label>
        <nav>
            <ul>
                <li><a href="">LINK</a></li>
                <li>
                    <a>
                        LINK
                        <i class="fa-solid fa-caret-down"></i>
                    </a>
                    <ul>
                        <li class="">
                            <a>
                                DOWN
                                <i class="fa-solid fa-caret-right"></i>
                            </a>
                            <ul>
                                <li><a href="">LINK 1</a></li>
                                <li><a href="">LINK2</a></li>
                            </ul>
                        </li>
                        <li class="">
                            <a>
                                DWON
                                <i class="fa-solid fa-caret-right"></i>
                            </a>
                            <ul>
                                <li><a href="">LINK 1</a></li>
                                <li><a href="">LINK2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a>
                        LINK
                        <i class="fa-solid fa-caret-down"></i>
                    </a>
                    <ul>
                        <li><a href="">LINK</a></li>
                    </ul>
                </li>
                <li><a href="">LINK</a></li>
            </ul>
        </nav>
    </div>
</body>

</html>