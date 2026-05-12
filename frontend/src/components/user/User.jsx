import React,{Component} from "react";
import Main from "../templates/Main";

const headerProps = {
    icon: "users",
    title: "usuarios",
    subtitle: "Cadastro de usuario: Incluir, Alterar, List e Excluir usuarios"

}

export default class UserCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>Cadastro de Usuarios</Main>
        )
    }
}