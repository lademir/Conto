import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, FormControl, Input, useToast, VStack } from "native-base";
import { useState } from "react";
import { Layout } from "../../components/template/Layout";
import { useCounter } from "../../data/hooks/useCounter";
import theme from "../../theme";

type formData = {
    title: string;
    goal?: string;
};

export function AddCounter() {
    const { addCounter } = useCounter();
    const { navigate } = useNavigation();
    const toast = useToast();
    const [form, setForm] = useState<formData>({
        title: "",
        goal: undefined
    });

    function handleAddCounter() {
        if (form.title.length < 3) {
            toast.show({
                title: "Coloque um nome para o contador",
                placement: "top",
                backgroundColor: theme.COLORS.ERROR,
                color: theme.COLORS.WHITE,
                duration: 1000 * 2 //2 seconds
            });
        }
        else if (form.title.length > 9) {
            toast.show({
                title: "No máximo 9 letras",
                placement: "top",
                backgroundColor: theme.COLORS.ERROR,
                color: theme.COLORS.WHITE,
                duration: 1000 * 2 //2 seconds
            });
        }
        else {
            const data = {
                title: form.title,
                goal: form.goal ? Number(form.goal) : undefined,
                count: 0
            };

            addCounter(data);
            navigate("home");
        }
    }


    return (
        <Layout leftButton={<AntDesign onPress={() => navigate("home")} name="arrowleft" style={{
            marginLeft: "auto"
        }} color={"white"} size={24} />} title="Adicionar novo contador">
            <VStack width={"90%"}>
                <FormControl isRequired>
                    <FormControl.Label _text={{
                        bold: true,
                        fontSize: 18
                    }}>Nome</FormControl.Label>
                    <Input value={form.title} onChange={(e) => setForm({
                        ...form,
                        title: e.nativeEvent.text
                    })} placeholder="Treinos..." placeholderTextColor={theme.COLORS.GRAY} color={theme.COLORS.WHITE} fontSize={20} borderWidth={0} backgroundColor={theme.COLORS.PRIMARY} height={50} />
                </FormControl>
                <FormControl>
                    <FormControl.Label _text={{
                        bold: true,
                        fontSize: 18
                    }}>Meta</FormControl.Label>
                    <Input value={form?.goal} onChange={(e) => setForm({
                        ...form,
                        goal: e.nativeEvent.text
                    })} placeholder="240" placeholderTextColor={theme.COLORS.GRAY} keyboardType="number-pad" color={theme.COLORS.WHITE} fontSize={20} borderWidth={0} backgroundColor={theme.COLORS.PRIMARY} height={50} />
                    <FormControl.HelperText>
                        Voce tem alguma meta para esse contador?
                    </FormControl.HelperText>
                </FormControl>
                <Button onPress={handleAddCounter} style={{
                    marginTop: 20
                }}>Adicionar</Button>
            </VStack>
        </Layout>
    );
}