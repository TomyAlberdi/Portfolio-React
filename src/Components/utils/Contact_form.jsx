import React from 'react'

const Contact_form = () => {

    (function() {
        function getFormData(form) {
            let elements = form.elements
            let honeypot

            let fields = Object.keys(elements).filter(function(k) {
                if (elements[k].name === "honeypot") {
                    honeypot = elements[k].value
                    return false
                }
                return true
            }).map(function(k) {
                if(elements[k].name !== undefined) {
                    return elements[k].name
                } else if(elements[k].length > 0) {
                    return elements[k].item(0).name
                }
            }).filter(function(item, pos, self) {
                return self.indexOf(item) == pos && item
            })

            let formData = {}
            fields.forEach(function(name) {
                let element = elements[name]
                formData[name] = element.value
                if (element.length) {
                    let data = []
                    for (let i=0; i < element.length; i++) {
                        let item = element.item(i)
                        if (item.checked || item.selected) {
                            data.push(item.value)
                        }
                    }
                    formData[name] = data.join(', ')
                }
            })

            formData.formDataNameOrder = JSON.stringify(fields)
            formData.formGoogleSheetName = form.dataset.sheet || "response"
            formData.formGoogleSendEmail = form.dataset.email || ""
            return {data: formData, honeypot: honeypot}
        }
        function handleFormSubmit(event) {
            event.preventDefault()
            let form = event.target
            let formData = getFormData(form)
            let data = formData.data
            if(formData.honeypot) {
                return false
            }

            disableAllButtons(form)
            let url = form.action
            var xhr = new XMLHttpRequest()
            xhr.open('POST', url)
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    form.reset()
                    let formElements = form.querySelector(".form-elements")
                    if (formElements) {
                        formElements.style.display = "none"
                    }
                    let thankyou = form.querySelector(".thankyou_message")
                    if(thankyou) {
                        thankyou.style.display = "inline-block"
                    }
                }
            }
            let encoded = Object.keys(data).map(function(k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k])
            }).join('&')
            xhr.send(encoded)
        }
        function loaded() {
            let forms = document.querySelectorAll('form')
            for (let i=0; i < forms.length; i++) {
                forms[i].addEventListener("submit",handleFormSubmit,false)
            }
        }
        document.addEventListener("DOMContentLoaded",loaded,false)
        function disableAllButtons(form) {
            let buttons = form.querySelectorAll('button')
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = true
            }
        }
    })()

    return (
        <section className='ContactForm'>
            <form method='POST' action="https://script.google.com/macros/s/AKfycbx5iKThzfUaBvM4XKYCCXRThma3knIV6Jr0KH8QxRHv4ntNF2FgqqIsy9edXlfdd_1L/exec">
                <div className="form-elements">
                    <fieldset>
                      <input type="text" name="name" id="name" placeholder="Nombre" onChange={undefined} />
                    </fieldset>
    
                    <fieldset>
                      <textarea name="message" id="message" placeholder="Mensaje" onChange={undefined} ></textarea>
                    </fieldset>
    
                    <fieldset>
                        <input type="email" name="email" id="email" placeholder="Email de contacto" onChange={undefined} />
                    </fieldset>
    
                    <fieldset className="honeypot">
                        <label htmlFor="honeypot">honeypot label</label>
                        <input id="honeypot" type="text" name="honeypot" value="" onChange={undefined} />
                    </fieldset>
    
                    <fieldset>
                        <input type="submit" value="Enviar" id="submit" onChange={undefined} />
                    </fieldset>
                    
                </div>

                <div className="thankyou_message">
                    <h2>¡Gracias! Me pondré en contacto lo antes posible</h2>
                </div>
            </form>
            <div className='filler'>
                <i className="fa-solid fa-code"></i>
            </div>
        </section>
    )
}

export default Contact_form