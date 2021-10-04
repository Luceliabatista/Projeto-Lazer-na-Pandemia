<template>
    <section>
    <v-row class ="container">
        <h1>Sobre o projeto:</h1>
        <p>O projeto foi desenvolvido em outubro de 2021 durante o Hackathon Decola Mercury, 9º Hackathon realizado pela empresa Iteris.
        <br>
        Consiste em uma aplicação Web com foco mobile que apresenta algumas opções de entretenimento, como jogos e animes.
        <br>
        </p>
        <v-img class="img" src= "https://www.iteris.com.br/Iteris.Site.Cms.Theme/img/logo.svg"
            max-height="250"
            max-width="250"
        ></v-img>
         


    </v-row>
    <v-row class="devs">
        <p> Projeto desenvolvido pela equipe 13 que contou com os integrantes:</p>
        <a src="https://github.com/snaketartar">
            <div class="participantes">
                <h2>Ivan Megre Souto</h2>
                <img src="https://avatars.githubusercontent.com/u/71356069?v=4">
                <p>Github</p>


            </div>
        </a>
      
        <a href="https://github.com/YasudaYutaka">         
            <div class="participantes">
                <h2>Rafael Yutaka Yasuda</h2>
                <img src="https://avatars.githubusercontent.com/u/62554340?v=4">
                <p>Github</p>


            </div>
        </a>
      
        <a href="https://github.com/Luceliabatista">
            <div class="participantes">
                <h2>Lucélia De Souzaome</h2>
                <img src="https://avatars.githubusercontent.com/u/86496770?v=4">
                <p>Github</p>
            </div>
        </a>
      
        <a  href="https://github.com/wellymaya">
            <div class="participantes">
                <h2>Welly Mayara</h2>
                <img src="https://avatars.githubusercontent.com/u/72640257?v=4"> 
                <p>Github</p>

            </div>
        </a>
      
    </v-row>

    <v-row class="referencias">
        <h1>Referências</h1>
        <h2>APIS utilizadas:</h2>
        <ul>
            <li> <a href="https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json" target="_blank"> Jogos</a></li>
            <li> <a href="https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json" target="_blank"> Animes</a></li>
         </ul>
    </v-row>

</section>
</template>

<script>
export default {
    name: 'Sobre',
}
</script>

<style scoped>
    section{
        width: 80vw;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
    
    }
    .container{
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
        align-items:center;
        justify-content:center;
        margin-top:4em;
        height:70vh;
        }

    .img{
        margin:35px;
    }

    .devs{
        display: flex;
        justify-content:center;
        align-self: center;
        flex-direction: row;
        flex-wrap:wrap;
        height:200vh;
        color:#3f4042;


        
    }

     .devs a{
        display: flex;
        flex-direction: column;
        flex-wrap:wrap;
        align-items: center;
        margin: 1px;
        width:100%;
        height: 18%;
        border-radius: 7px;
        border-right: solid  1px  #bbbdbb;
        border-bottom: solid  1px  #bbbdbb;
        text-decoration: none;
        transition: .4s;
    }

    .devs a:hover{
        background-color:#fca33d;
        transform: translateX(13px);
    }
    
    .devs img{
        width:35%;
        border-radius: 50%;
        margin: 15px 0px;
    }
    h1{
        width:100%;
        margin:5px;
    }


    h2{
        font-size:22px;
        margin-top: 25px;
        width: 100%;
        color:#3f4042;

    }

    p{
        color:#7a7f87;
        width:75%;
        margin-top:35px;
        margin:auto;
    }

    .referencias{
        width: 100%;
        height: 80vh;
        display:flex;
        flex-wrap:wrap;
        text-align:center;
        justify-content:center;
    }

    .referencias h1{
        margin-bottom: 5px;
    }

    .referencias li{
        width:80%;
        margin:85px auto;    }
    .referencias li a{
        color:#8f591c ;
        text-decoration: none;
        font-weight: 500;
        }


</style>