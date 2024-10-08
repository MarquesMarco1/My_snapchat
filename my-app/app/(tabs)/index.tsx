import { StyleSheet, Button } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';


type RootStackParamList = {
    "auth/register": { string: string } | undefined;
    "auth/login": { string: string } | undefined;
};

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    return (
        <ThemedView style={styles.body}>
            <ThemedView style={styles.inscriptionContainer}>
                <Button
                    onPress={() => navigation.navigate('auth/register')}
                    title="Inscription"
                    color="#E82754"
                    accessibilityLabel="Clicker pour s'inscrire"
                />
            </ThemedView>
            <ThemedView style={styles.connexionContainer}>
                <Button
                    onPress={() => navigation.navigate('auth/login')}
                    title="Connexion"
                    color="#3CB2E2"

                    accessibilityLabel="Clicker pour se connecter"
                />
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    //real color snap 
    // jaune => #F4F01B
    // bleu => #3CB2E2
    // rouge => #E82754
    body: {
        justifyContent: 'center',
        width: '100%',
        height: '120%',
        backgroundColor: '#F4F01B'
    },
    titleContainer: {
        top: 75,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    inscriptionContainer: {
        bottom: 5,
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#E82754',
    },
    connexionContainer: {
        bottom: 5,
        gap: 8,
        marginBottom: 8,
        backgroundColor: '#3CB2E2',
    },
});

export default HomeScreen