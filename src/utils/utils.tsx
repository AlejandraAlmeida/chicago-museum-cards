export const download = (url: string) => {
  fetch(url, {
    method: 'GET',
    headers: {}
  })
    .then(response => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'image.png') // or any other extension
        document.body.appendChild(link)
        link.click()
      })
    })
    .catch(err => {
      console.log(err)
    })
}
