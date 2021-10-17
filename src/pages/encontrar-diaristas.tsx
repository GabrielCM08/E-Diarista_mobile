import React, { useState } from "react";
import { Text, View } from "react-native";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import TextInput from "ui/components/inputs/TextInput/TextInput";
import { TextInputMask } from "react-native-masked-text";
import Button from "ui/components/inputs/Button/Button";

const EncontrarDiaristas: React.FC = () => {
  const [cep, setcep] = useState("");

  return (
    <View>
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <TextInputMask
        value={cep}
        onChangeText={setcep}
        type={"custom"}
        options={{
          mask: "99.999-999",
        }}
        customTextInput={TextInput}
        customTextInputProps={{
          label: "Digite seu CEP",
        }}
      />
      <Button mode={"contained"} style={{ marginTop: 32 }}>
        Buscar
      </Button>
    </View>
  );
};

export default EncontrarDiaristas;
