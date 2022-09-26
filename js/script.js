xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/xml_conteudo.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudo");

/* Exibe o conteúdo */

        function introducaomaior() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<p class='introducaomaior'>" + x[i].getElementsByTagName("introducaott")[0].childNodes[0].nodeValue + "</p>");
            }
        }

        function introducaomenor() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<p class='introducaomenor'>" + x[i].getElementsByTagName("introducaocorpo")[0].childNodes[0].nodeValue + "</p>");
            }
        }

        function sobretitulo() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<p class='sobretitulo'>" + x[i].getElementsByTagName("sobrett")[0].childNodes[0].nodeValue + "</p>");
            }
        }

        function sobreconteudo() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<p class='sobreconteudo'>" + x[i].getElementsByTagName("sobrecorpo")[0].childNodes[0].nodeValue + "</p>");
            }
        }

        function problematitulo() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<p class='problematitulo'>" + x[i].getElementsByTagName("problematt")[0].childNodes[0].nodeValue + "</p>");
            }
        }

        function problemaconteudo() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<p class='problemaconteudo'>" + x[i].getElementsByTagName("problemacorpo")[0].childNodes[0].nodeValue + "</p>");
            }
        }

        function tituloex() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<h2 class='tit_exemp'>" + x[i].getElementsByTagName("tituloex")[0].childNodes[0].nodeValue + "</h2>");
            }
        }

        function titulopro() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<h3 class='titu_projeto'>" + x[i].getElementsByTagName("titulopro")[0].childNodes[0].nodeValue + "</h3>");
            }
        }

        function textpro() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<p class='text_projet'>" + x[i].getElementsByTagName("textpro")[0].childNodes[0].nodeValue + "</p>");
            }
        }
       
        function pro1() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<div class='text_img_proj1' id='descricaoprojeto'>" + x[i].getElementsByTagName("pro1")[0].childNodes[0].nodeValue + "</div>");
            }
        }
        
        function pro2() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<div class='text_img_proj2' id='descricaoprojeto'>" + x[i].getElementsByTagName("pro2")[0].childNodes[0].nodeValue + "</div>");
            }
        }

        function pro3() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<div class='text_img_proj3' id='descricaoprojeto'>" + x[i].getElementsByTagName("pro3")[0].childNodes[0].nodeValue + "</div>");
            }
        }

        function pro4() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<div class='text_img_proj4' id='descricaoprojeto'>" + x[i].getElementsByTagName("pro4")[0].childNodes[0].nodeValue + "</div>");
            }
        }

        function equipett() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<h3 class='titu_equipe'><br>&nbsp;&nbsp;" + x[i].getElementsByTagName("equipett")[0].childNodes[0].nodeValue + "</h3>");
            }
        }

        function edun1() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<h4 class='card-title'>" + x[i].getElementsByTagName("edun")[0].childNodes[0].nodeValue + "</h4>");
            }
        }

        function gabrieln1() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<h4 class='card-title'>" + x[i].getElementsByTagName("gabrieln")[0].childNodes[0].nodeValue + "</h4>");
            }
        }

        function henriquen1() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<h4 class='card-title'>" + x[i].getElementsByTagName("henriquen")[0].childNodes[0].nodeValue + "</h4>");
            }
        }

        function jorgen1() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<h4 class='card-title'>" + x[i].getElementsByTagName("jorgen")[0].childNodes[0].nodeValue + "</h4>");
            }
        }

        function edun2() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<a href='#' class='linkeds'><i class='fa-brands fa-linkedin'></i>&nbsp;&nbsp;" + x[i].getElementsByTagName("edun")[0].childNodes[0].nodeValue + "</a><br>");
            }
        }

        function gabrieln2() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<a href='#' class='linkeds'><i class='fa-brands fa-linkedin'></i>&nbsp;&nbsp;" + x[i].getElementsByTagName("gabrieln")[0].childNodes[0].nodeValue + "</a><br>");
            }
        }

        function henriquen2() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<a href='#' class='linkeds'><i class='fa-brands fa-linkedin'></i>&nbsp;&nbsp;" + x[i].getElementsByTagName("henriquen")[0].childNodes[0].nodeValue + "</a><br>");
            }
        }

        function jorgen2() {
            n = x.length - 1;
            for (var i = n; i >= 0; i--) {
                document.write("<a href='#' class='linkeds'><i class='fa-brands fa-linkedin'></i>&nbsp;&nbsp;" + x[i].getElementsByTagName("jorgen")[0].childNodes[0].nodeValue + "</a><br><br>");
            }
        }
       
       
       