import { FlatList, StyleSheet, Text, View } from 'react-native';

const personas = [
  { nombre: 'Iza', apellido: 'Morales', cedula: '0923145698' },
  { nombre: 'David', apellido: 'Romero', cedula: '0927895698' },
  { nombre: 'Tessa', apellido: 'Daniela', cedula: '0698787948' }
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Personas</Text>
      <FlatList
        style={styles.lista}
        data={personas}
        renderItem={(obj) => {//el objeto que recibe
          return (
            <View style={styles.itemPersona}>
              <Text style={styles.nombre}>{obj.index + 1} {obj.item.nombre} {obj.item.apellido}</Text>
              <Text style={styles.cedula}>{obj.item.cedula}</Text>
            </View>
          );
        }}
        keyExtractor={(item)=>{
          return item.cedula;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#f0f4f8',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  lista: {
    flex: 1,
  },
  itemPersona: {
    backgroundColor: '#fff8dc', // lemonchiffon
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3, // Android
  },
  nombre: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  cedula: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});
