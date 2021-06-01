import styled from 'styled-components'

export const SearchContainer = styled.div`
   .wrapper {
        background: #e71c78;
        position:relative; 
        width: 100%;
        padding: 2%;
        margin-bottom: 1%;
   }


    .wrapper nav {
        position:relative;
        display:flex;
        width: 50%;
        margin: 0 auto;
        height: 70px;
        align-items:center;
        justify-content:space-between;
    }

    nav .content {
        display:flex; 
        align-items:center;
    }

    nav .content .links {
        margin-left: 80px;
        display:flex;
        min-width:100%;
    }

    .logo {
        color:#fff;
        font-size: 30px;
    }
    .content .logo a {
        color: #fff;
        font-size: 30px;
        font-weight: 600;
    }

    .content .links li {
        list-style:none;
        width: 50%;
    }

    .content .links li a {
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-decoration:none;
        padding: 10%;
        border-radius: 5px;
        transition: all 0.3s ease;
    }

    .content .links li:hover a {
        background:teal;
    }

    .wrapper .search-icon {
        font-size: 18px;
        cursor:pointer;
        line-height: 70px;
        width: 70px;
        text-align: center;
        color: white;
    }

    .wrapper .search-box {
        position:absolute;
        height:100%;
        max-width: calc(100% - 50px);
        width: 100%;
        opacity:0;
        pointer-events:none;
        transition: all 0.3s ease;
    }

    .wrapper #show-search:checked ~ .search-icon i::before {
        content: "\f00d"; 
        //f00d is a FontAwesome icon unicode
    }

    .wrapper #show-search:checked ~ .search-box {
        opacity:1;
        pointer-events:auto;
    }

    .search-box input {
        padding: 3%;
        width: 100%;
        height: 100%;
        border: none;
        outline:none;
        font-size: 1.2rem;
        // margin-left: -100%;
        color:#fff;
        background: #171c24;
    }

    .search-box input::placeholder {
        color: #f2f2f2;
    }

    .search-box .go-icon {
        position:absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        line-height: 60px;
        width: 70px;
        background: #171c24;
        border:none;
        outline:none;
        color:#fff;
        font-size: 20px;
        cursor: pointer;
    }

    .wrapper input[type="checkbox"] {
        display: none;
    }

    //Responsive code// 
    @media screen and (max-width: 1250px) {
        .wrapper nav {
            max-width: 100%;
            padding: 0 20px;
        }
        nav .content .links {
            margin-left: 30px;
        }

        .content .links li a {
            padding: 8px 13px;
        }
        .wrapper .search-box {
            max-width: calc(100% - 100px);
        }
        .wrapper .search-box input {
            padding: 0 100px 0 15px;
        }
    }

    @media screen and (max-width: 900px) {
        nav .content .links {
            display: block;
            position: fixed;
            background:#14181f;
            height: 100%;
            width: 100%;
            top: 70px;
            left: 0; 
            margin-left: 0;
            max-width: 150px;
        }
    }
`