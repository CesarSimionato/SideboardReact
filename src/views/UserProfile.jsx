import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Editar Perfil"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Empresa",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Empresa",
                          defaultValue: "Potternatural",
                          disabled: true
                        },
                        {
                          label: "Apelido",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Apelido",
                          defaultValue: "Potter"
                        },
                        {
                          label: "Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Nome",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Nome",
                          defaultValue: "Cesar"
                        },
                        {
                          label: "Sobrenome",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Sobrenome",
                          defaultValue: "Simionato"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Endereço",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Endereço",
                          defaultValue:
                            "Rua dos Alfeneiros"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "Cidade",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Cidade",
                          defaultValue: "Little Whinging"
                        },
                        {
                          label: "Estado",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Estado",
                          defaultValue: "MG"
                        },
                        {
                          label: "Numero",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "Numero"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Descrição</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Fale um pouco sobre voce.."
                            defaultValue="Meu nome é Cesar Medeiros Simionato, sou programador a 3 anos e atualmente estou aprendendo ReactJS."
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Atualizar Perfil
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://images7.alphacoders.com/445/445056.png"
                avatar={avatar}
                name="Cesar Simionato"
                userName="Potter"
                description={
                  <span>
                    "O destino não pode ser mudado.
                    <br />
                    Existem varios vários caminhos,
                    <br />
                    mas todos eles levam ao mesmo lugar."
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
