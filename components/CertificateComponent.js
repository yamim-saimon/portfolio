import React, { Component } from 'react'

export default class CertificateComponent extends Component {
    render() {
        this.state={
            certificate:[
               { id:0,
                name:'Front End Web Developement with React'
            },
            {
                id:1,
                name:'Fundamentals of Digital Marketing'
            },
               {
                   id:2,
                   name:'Front-End Ui Frameworks And Tools: Bootstrap'
               },
               {
                   id:3,
                   name:'Python Data Structures'
               },
               {
                   id:4,
                   name:'Web Application Technologies With Django'
               },
               {
                   id:5,
                   name:'Reposnsive Website Basics: Html, Css, Javascript'
               },
               {
                   id:6,
                   name:'Technical Support Fundamentals'
               },
               {
                   id:7,
                   name:'Wordpress swiftly'
               }

            ]
        }
        const menu=this.state.Certificate.map(x=>{
            return <div key={x.id}>x.name</div>
        })
        return (
            <div>
                <h1>{menu}</h1>
            </div>
        )
    }
}
