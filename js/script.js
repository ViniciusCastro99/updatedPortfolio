//Seleção dos elementos
const bachelorsDegreeContainer = document.querySelector("#bachelorsDegrees")
const otherCoursesContainer = document.querySelector("#otherCoursesContainer")
const projectContainer = document.querySelector("#projectsContainer")


//Classes para construção dos cursos e projetos.
class EducationCard {
    constructor
    (   category,
        image,
        title,
        workLoad,
        status,
        about,

    )
    {
        this.category = category
        this.image = image
        this.title = title
        this.workLoad = workLoad
        this.status = status
        this.about = about

    }
}

class ProjectCard {
    constructor
    (
        category,
        image,
        title,
        description,
        repository,
        site,

    )
    {
        this.category = category
        this.image = image
        this.title = title
        this.description = description
        this.repository = repository
        this.site = site

    }
}

//Criação dos arrays das graduações, cursos e projetos

const bachelorsDegree = [
    new EducationCard ("Degree","img/education/univesp.png", "Bacharelado em Tec. da Informação", 2400, "Cursando", "https://univesp.br/cursos/bacharel-em-tecnologia-da-informacao") ,
    new EducationCard ("Degree","img/education/trianguloAnhanguera.png", "Bacharelado em Administração", 3200 , "Concluído", "https://www.anhanguera.com/curso/administracao/?utm_source=google&utm_medium=cpc&utm_term=administra%C3%A7%C3%A3o+anhanguera&utm_content=sch-l1_aedu_aon_graduacao_perf_cursos_gads_texto_administracao_inscrever_automatico_google_cpa&utm_campaign=google_semadserver_sch-l1_aedu_aon_graduacao_perf_cursos_conversao_valor-cpa_inscrever_cpa&gad_source=1&gclid=CjwKCAjwtNi0BhA1EiwAWZaANLZ8OYfo75VP8BKjVCBHA44ZVMBOeHULpAf76bg9nfkBvn_OqiL1OhoCGOwQAvD_BwE&gclsrc=aw.ds"),
    new EducationCard("Other","img/education/udemy.png","Algoritmos e Lógica de Programação - Nélio Alves", 30 , "Concluído","https://www.udemy.com/course/curso-algoritmos-logica-de-programacao/?couponCode=24T4MT92724B"),
    new EducationCard("Other","img/education/udemy.png", "Formação Front-end - HTML, CSS, JS, React e +", 50, "Cursando", "https://www.udemy.com/course/formacao-front-end-html-css-javascript-react-e/?couponCode=24T4MT92724B"),
]


const projects = [
    new ProjectCard("Project", "img/projects/calculadoraImcReact.png", "Calculadora de IMC - React", "Calcula o IMC com base na altura e peso e apresenta os status de obesidade. O diferencial desse peojeto foi o uso do React para componentização de elementos e gerenciamento de estado.", "https://github.com/ViniciusCastro99/CalcImcReact", "https://viniciuscastro99.github.io/CalcImcReact/"),
    new ProjectCard("Project", "img/projects/clima1.png","Weather App","Mostra a temperatura, umidade e descrição do clima de qualquer cidade pesquisada, com cobertura global e tradução automática para o português.","https://github.com/ViniciusCastro99/clima ","https://viniciuscastro99.github.io/clima/"),
    new ProjectCard("Project", "img/projects/conversor.png","Conversor de Moedas","Selecione as moedas de origem e destino para a conversão","https://github.com/ViniciusCastro99/conversorDeMoedas","https://viniciuscastro99.github.io/conversorDeMoedas/"),
    new ProjectCard("Project", "img/projects/qrCode.png","Gerador de QRCode","Insira um link ou texto e um QRCode será gerado!","https://github.com/ViniciusCastro99/geradorQrCode","https://viniciuscastro99.github.io/geradorQrCode/"),
    new ProjectCard("Project", "img/projects/iphone.png","iPhone 15","Página de vendas do iPhone 15 com slide das cores disponíveis!","https://github.com/ViniciusCastro99/iPhone","https://viniciuscastro99.github.io/iPhone/"),
    new ProjectCard("Project", "img/projects/hdcHost.png","HDC Host","Landing Page de uma empresa fictícia de hospedagem!","https://github.com/ViniciusCastro99/hostProject","https://viniciuscastro99.github.io/hostProject/?name=&email=&message="),
]

const allItems = []
allItems.push(bachelorsDegree, projects)

console.log(allItems)

//Função para renderização dos cards

const rendering = () => { 
    //Cards de educação bacharelados, cursos e etc
    allItems.flat().forEach((item) => {
        const card = document.createElement("div")
        item.category === "Degree" || item.category === "Other" ? card.classList.add("educationItem") : card.classList.add("projectItem")

        const img = document.createElement("img")
        if (item.category === "Degree") {
            item.title === "Bacharelado em Tec. da Informação" ? img.classList.add("univespImg"): img.classList.add("educationImg")
        }else if(item.category === "Other"){
            img.classList.add("udemyImg")
        } else{
            img.classList.add("projectImg")
        }

        img.src = item.image
        card.appendChild(img)

        const text = document.createElement("div")
        item.category === "Degree" || item.category === "Other" ? text.classList.add("bachelorDegreeText") : text.classList.add("textProjectItem") 
        card.appendChild(text) 

        const title = document.createElement("h3")
        title.appendChild(document.createTextNode(item.title))
        text.appendChild(title)

        const workLoad = document.createElement("p")
        workLoad.appendChild(document.createTextNode(`Carga Horária: ${item.workLoad}`))
        if (item.category === "Degree" || item.category === "Other") {text.appendChild(workLoad)}

        const status = document.createElement("p")
        status.innerText = item.status
        if (item.category === "Degree" || item.category === "Other") {text.appendChild(status)}
        
        const about = document.createElement("p")
        if (item.category === "Degree" || item.category === "Other"){about.classList.add("about")}
        const aTagAbout = document.createElement("a")
        aTagAbout.innerHTML = "Sobre"
        aTagAbout.classList.add("aAbout")
        aTagAbout.href = item.about
        aTagAbout.target = "_blank"
        if(item.category === "Degree" || item.category === "Other"){about.appendChild(aTagAbout)}
        card.appendChild(about)

        const description = document.createElement("p")

        if(item.category === "Project"){
            description.innerText = item.description
            text.appendChild(description)
        }

        const projectBtnContainer = document.createElement("div")
        projectBtnContainer.classList.add("projectBtnContainer")
        btnProjectRepository = document.createElement("a")
        btnProjectRepository.classList.add("projectBtn")
        btnProjectRepository.target = "_blank"
        btnProjectRepository.innerText = "Repositorio"
        btnProjectRepository.href = item.repository
        projectBtnContainer.appendChild(btnProjectRepository)

        btnProjectSite = document.createElement("a")
        btnProjectSite.classList.add("projectBtn")
        btnProjectSite.target = "_blank"
        btnProjectSite.innerText = "Site"
        btnProjectSite.href = item.site
        projectBtnContainer.appendChild(btnProjectSite)
        if(item.category === "Project"){
            card.appendChild(projectBtnContainer)
        }


        if(item.category === "Degree"){
            bachelorsDegreeContainer.appendChild(card)
        }else if(item.category === "Other") {
            otherCoursesContainer.appendChild(card)
        }else{
            projectContainer.appendChild(card)
        }
    })
}

rendering()