import { Text, View, ScrollView } from 'react-native';
import { AppBar, Stack, HStack, Box, Button } from "@react-native-material/core";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function App() {
  return (<>
    <AppBar style={{ backgroundColor: 'black', height: 40 }} />
    <AppBar title="Banco Kantina" style={{ backgroundColor: '#ED0000' }}
      leading={props => (
        <FontAwesome name="bank" size={20} color="white" style={{ marginLeft: 15 }} />
      )} />
    <ScrollView>
      <Stack fill spacing={4} style={{ backgroundColor: '#eeeeee', paddingTop: 18, alignItems: 'center' }}>
        <Box pl={20} pb={5} style={{ alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 25 }}>Hola, Pibe Kntina!</Text>
        </Box>
        <View
          elevation={4}
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 190,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text>Caja de ahorro</Text>
          <Text style={{ paddingTop: 2, color: 'grey' }}>*** *** / *</Text>
          <Text style={{ marginTop: 15, fontSize: 25 }}>$ 30.560,77</Text>
          <Text style={{ marginTop: 15, fontSize: 20 }}>U$D 200,00</Text>
          <HStack style={{ marginTop: 15 }}>
            <Button
              variant="text"
              title={<Text style={{ color: 'gray' }}>Ver movimientos</Text>}
              leading={props => <MaterialIcons name="preview" size={15} color="gray" />}
              uppercase={false}
              style={{ width: 150 }}
            />
            <Button
              variant="text"
              title={<Text style={{ color: 'gray' }}>CBU/Alias</Text>}
              leading={props => <AntDesign name="sharealt" size={15} color="gray" />}
              uppercase={false}
              style={{ width: 150 }}
            />
          </HStack>
        </View>
        <Box pl={20} pb={5} mt={10} style={{ alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 16 }}>Accesos rápidos</Text>
        </Box>
        <HStack spacing={25}>
          <View
            elevation={4}
            style={{
              backgroundColor: 'white',
              width: '26%',
              height: 100,
              borderRadius: 10,
            }}>
            <Box alignItems='center' mt={25}>
              <FontAwesome5 name="hand-holding-heart" size={24} color="#4896AF" />
              <Text style={{ marginTop: 2 }}>
                Seguros
              </Text>
            </Box>
          </View>
          <View
            elevation={4}
            style={{
              backgroundColor: 'white',
              width: '26%',
              height: 100,
              borderRadius: 10,
            }}>
            <Box alignItems='center' mt={25}>
              <FontAwesome name="money" size={24} color="#4896AF" />
              <Text style={{ marginTop: 2 }}>
                Superfondos
              </Text>
            </Box>
          </View>
          <View
            elevation={4}
            style={{
              backgroundColor: 'white',
              width: '26%',
              height: 100,
              borderRadius: 10,
            }}>
            <Box alignItems='center' mt={25}>
              <Feather name="help-circle" size={24} color="#4896AF" />
              <Text style={{ marginTop: 2 }}>
                Ayuda
              </Text>
            </Box>
          </View>
        </HStack>
        <Box pl={20} pb={5} mt={10} style={{ alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 16 }}>Mis tarjetas</Text>
        </Box>
        <ScrollView horizontal={true} style={{ paddingBottom: 15 }}>
          <View
            elevation={4}
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              backgroundColor: '#ED0000',
              marginRight: 20,
              marginLeft: 20,
              height: 180
            }}>
            <Box mt={25} pl={10} style={{ width: 300 }}>
              <Text style={{ color: 'white' }}>Tarjeta terminada en ****</Text>
              <Box alignItems='flex-end' style={{ marginTop: 80, paddingRight: 10 }}>
                <Fontisto name="visa" size={50} color="white" />
              </Box>
            </Box>
          </View>
          <View
            elevation={4}
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              backgroundColor: '#ED0000',
              marginRight: 20,
              height: 180
            }}>
            <Box mt={25} pl={10} style={{ width: 300 }}>
              <Text style={{ color: 'white' }}>Tarjeta terminada en ****</Text>
              <Box alignItems='flex-end' style={{ marginTop: 80, paddingRight: 10 }}>
                <Fontisto name="mastercard" size={50} color="white" />
              </Box>
            </Box>
          </View>
        </ScrollView>
        <Box pl={20} pb={5} style={{ alignSelf: 'flex-start' }}>
          <Text style={{ fontSize: 16 }}>Más opciones</Text>
        </Box>
        <View
          elevation={4}
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 90,
            borderRadius: 10,
            padding: 11
          }}
        >
          <HStack spacing={15} style={{ marginTop: 4 }}>
            <FontAwesome name="handshake-o" size={14} color="white" style={{ height: 36, width:36, borderRadius: 10, padding: 10, backgroundColor: '#e0e0e0' }} />
            <Box>
              <Text style={{fontWeight:'bold'}}>Préstamos</Text>
              <Text style={{ marginTop: '2%', color: 'gray', width: '70%' }}>Armá un préstamo a tu medida, simulalo y pedilo online.</Text>
            </Box>
          </HStack>
        </View>
        <View
          elevation={4}
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 90,
            borderRadius: 10,
            padding: 11, 
            marginTop:5
          }}
        >
          <HStack spacing={15} style={{ marginTop: 4 }}>
            <MaterialIcons name="security" size={14} color="white" style={{ height: 36, width:36, borderRadius: 10, padding: 11, backgroundColor: '#e0e0e0' }} />
            <Box>
              <Text style={{fontWeight:'bold'}}>Seguros</Text>
              <Text style={{ marginTop: '2%', color: 'gray', width: '70%' }}>Cotizá y encontrá tus seguros de manera inmediata y online.</Text>
            </Box>
          </HStack>
        </View>
        <View
          elevation={4}
          style={{
            backgroundColor: 'white',
            width: '90%',
            height: 90,
            borderRadius: 10,
            padding: 11, 
            marginTop:5,
            marginBottom:15
          }}
        >
          <HStack spacing={15} style={{ marginTop: 4 }}>
            <Feather name="info" size={14} color="white" style={{ height: 36, width:36, borderRadius: 10, padding: 11, backgroundColor: '#e0e0e0' }} />
            <Box>
              <Text style={{fontWeight:'bold'}}>Información útil</Text>
              <Text style={{ marginTop: '2%', color: 'gray', width: '70%' }}>Encontrá datos de cajeros, sucursales y teléfonos de contacto.</Text>
            </Box>
          </HStack>
        </View>
      </Stack>
    </ScrollView>
  </>
  );
};