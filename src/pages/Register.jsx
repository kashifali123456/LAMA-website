import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 98.38vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("data:image/jpeg;base64,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")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
 
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;