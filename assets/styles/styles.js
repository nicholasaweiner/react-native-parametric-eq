import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center',
    color: '#333',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    marginBottom: 20,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingVertical: 10,
    marginBottom: 20,
  },
  inputLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    fontSize: 14,
    color: '#333',
    padding: 0,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'center',
  },
});
