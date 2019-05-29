import React from 'react';
import {Button, Header, Modal, Form} from "semantic-ui-react";

const modalLogin = ({modal, onChange, loginName , toggle}) => {
 return (
     <Modal open ={modal}>
         <Modal.Content>

             <Modal.Description>

                 <Header> Chat </Header>
                 <p>Введите свое имя</p>
             </Modal.Description>
         </Modal.Content>
<Form>
    <Form,Input fluid value={loginName} onChange = {onChange} placeholder ="Enter your Name"/>
    <Button fluid onClick={toggle}>Submit</Button>
     </Form>
     </Modal>
 )

};
export default 