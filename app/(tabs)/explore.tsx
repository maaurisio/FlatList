import { FlatList, StyleSheet, Text, View } from 'react-native';
const productos = [
  { id: '1', nombre: 'Coca Cola', categoria: 'Bebidas', precioCompra: '1.80', precioVenta: '1.60' },
  { id: '2', nombre: 'Fuze Tea', categoria: 'Bebidas', precioCompra: '1.00', precioVenta: '1.20' },
  { id: '3', nombre: 'Doritos', categoria: 'snack', precioCompra: '0.50', precioVenta: '0.60' },
  { id: '4', nombre: 'Papitas', categoria: 'snack', precioCompra: '0.60', precioVenta: '0.80' },
  { id: '5', nombre: 'Gomitas', categoria: 'snack', precioCompra: '1.00', precioVenta: '1.00' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Productos</Text>
      <FlatList
        style={styles.lista}
        data={productos}
        renderItem={(pro) => {//el objeto que recibe
          return (
            <View style={styles.itemProducto}>
              <Text style={styles.nombre}>{pro.index + 1} {pro.item.nombre} [{pro.item.categoria}]</Text>
              <Text style={styles.cedula}>{pro.item.precioVenta}</Text>
            </View>
          );
        }}
        keyExtractor={(proId)=>{
          return proId.id;
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
  itemProducto: {
    backgroundColor: '#fff8dc', 
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
