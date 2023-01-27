import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#F5F5F5'
    },
    bandContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bandLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    bandSlider: {
        flex: 1,
    },
    qContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    qLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    qSlider: {
        flex: 1,
    },
    gainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    gainLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    gainSlider: {
        flex: 1,
    },
    presetContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    presetButton: {
        marginRight: 10,
    },
    presetLabel: {
        fontSize: 16,
    },
});

export default styles;
