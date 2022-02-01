const formValidation = () => {

    const aplicantForm = document.querySelector('.form')

    function toggleLoader() {
        const loader = document.getElementById('loader')
        loader.classList.toggle('hidden')
    }

    async function sendData(data) {
        return await fetch('/api/apply/', {
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          body: data,
        })
      }

    function serializeForm(formNode) {

        const { elements } = formNode
        const data = new FormData()

        Array.from(elements)
          .filter((item) => !!item.name)
          .map((element) => {
            const { name, value } = element
      
            data.append(name, value)
          })
          console.log(Array.from(data.entries()))
          return data
      }

    async function handleFormSubmit(event) {
        event.preventDefault()
        const data = serializeForm(event.target)
        
        const response = await sendData(data)        
    }

    aplicantForm.addEventListener('submit', handleFormSubmit)

}

formValidation()