document.getElementById('header').innerHTML = `
    <div class="p-9 bg-info bg-opacity-10 border border-dark border-start-0 rounded-end"> 
        <nav class="navbar navbar-expand-sm navbar-dark bg-secondary">
            <div class="container">
                <div class="d-flex gap-2 align-items-center">
                <a href="index.html"><img src="https://icongr.am/feather/film.svg?size=32&amp;color=00aaff" alt="Logo"></a>
                <h1 class="display-6 text-light">Pelis</h1>
                </div>
                <div>
                <a href="peliculas.html" button title="Solo Admin"  class="btn btn-outline-dark my-2 my-sm-0" type="submit">Login</a>
                </div>
            </div>
        </nav>
    </div>
        `;

document.getElementById('footer').innerHTML = `
    <div class="container p-4 pb-0">
        <!-- Section: Social media -->
        <section class="mb-4 text-center">
            <!-- Github -->
            <a class="btn btn-outline-secondary btn-floating m-1" href="#" role="button">
                <img src="https://icongr.am/fontawesome/github.svg?size=20&color=ffffff" alt="Github">
            </a>
            <!-- Twitter -->
            <a class="btn btn-outline-secondary btn-floating m-1" href="#" role="button" >
                <img src="https://icongr.am/devicon/twitter-original.svg?size=20&color=currentColor" alt="Twitter">
            </a>
            <!-- Facebook -->
            <a class="btn btn-outline-secondary btn-floating m-1" href="#" role="button">
                <img src="https://icongr.am/devicon/facebook-plain.svg?size=20&color=00fa04" alt="Google"> 
            </a>    
            <!-- Instagram -->
            <a class="btn btn-outline-secondary btn-floating m-1" href="#" role="button">
                <img src="https://icongr.am/entypo/instagram.svg?size=20&color=f19a04" alt="Instagram"> 
            </a>
            <!-- Linkedin -->
            <a class="btn btn-outline-secondary btn-floating m-1" href="#" role="button">
                <img src="https://icongr.am/devicon/linkedin-original.svg?size=20&color=currentColor" alt="Linkedin"> 
            </a>
        </section>
    </div>
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        © 2023 Copyright:"Repo Peliculas" | Derechos reservados
    </div> 
`;
