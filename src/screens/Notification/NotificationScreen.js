import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NotificationScreen = () => {
    const statusData = [
        { id: 1, name: "Ade", status: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },
        { id: 2, name: "Liberty", status: "https://img.freepik.com/free-psd/portrait-young-teenage-girl_23-2150163961.jpg?t=st=1724754058~exp=1724757658~hmac=1ac0e3a5b49763bcf7cb8f974e424fd84d31dadd24e93eb9192f6f7bbdb56056&w=740" },
        { id: 3, name: "Shina", status: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },
        { id: 4, name: "Alabi", status: "https://img.freepik.com/free-psd/portrait-young-teenage-girl_23-2150163961.jpg?t=st=1724754058~exp=1724757658~hmac=1ac0e3a5b49763bcf7cb8f974e424fd84d31dadd24e93eb9192f6f7bbdb56056&w=740" },
        { id: 5, name: "Bisi", status: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },
        { id: 6, name: "Mathew", status: "https://img.freepik.com/free-psd/portrait-young-teenage-girl_23-2150163961.jpg?t=st=1724754058~exp=1724757658~hmac=1ac0e3a5b49763bcf7cb8f974e424fd84d31dadd24e93eb9192f6f7bbdb56056&w=740" },
        { id: 7, name: "Mathew", status: "https://img.freepik.com/free-psd/portrait-young-teenage-girl_23-2150163961.jpg?t=st=1724754058~exp=1724757658~hmac=1ac0e3a5b49763bcf7cb8f974e424fd84d31dadd24e93eb9192f6f7bbdb56056&w=740" },
        { id: 8, name: "Mathew", status: "https://img.freepik.com/free-psd/portrait-young-teenage-girl_23-2150163961.jpg?t=st=1724754058~exp=1724757658~hmac=1ac0e3a5b49763bcf7cb8f974e424fd84d31dadd24e93eb9192f6f7bbdb56056&w=740" },
    ];
    const ChannelData = [
        { id: 1, name: "Boy", logo: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },
        { id: 2, name: "Boy", logo: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },
        { id: 3, name: "Boy", logo: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },
        { id: 4, name: "Boy", logo: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },
        { id: 5, name: "Boy", logo: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },
        { id: 6, name: "Boy", logo: "https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg?t=st=1724753999~exp=1724757599~hmac=8dbde3556cc01bcc2ea155f237ab1da2a77f12cac032ab556dae7c57a2472fa8&w=996" },


    ]
    const SampleDesign = ({ item }) => {
        return (
            <View style={{ marginRight: 10 }}>
                <Image source={{ uri: item.status }} style={{ height: 60, width: 60, borderRadius: 100 }} />
                <Text style={{ fontSize: 14, color: 'black', textAlign: 'center' }}>{item.name}</Text>
            </View>
        )
    }

    const RenderHeader = () => {
        return (
            <View>
                <FlatList
                    data={statusData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <SampleDesign item={item} />}
                />
                <Text style={{ fontSize: 15, color: "black", marginTop: 15, marginBottom: 15 }}>Recent Update</Text>
            </View>
        )
    };

    const RenderFooter = () => {
        return (
            <View style={{ marginBottom: 40, }}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: 'bold', marginBottom: 15 }}>Channels</Text>
                <FlatList
                    data={ChannelData}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.container}>
                                <View style={{ alignItems: 'center', marginTop: 10 }}>
                                    <Image source={{ uri: item.logo }} style={{ height: 50, width: 50, borderRadius: 100 }} />
                                    <Text style={{ fontSize: 14, color: 'black', textAlign: 'center' }}>{item.name}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }

    return (
        <View style={styles.page}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black", marginBottom: 10 }}>Status</Text>
            <FlatList
                ListHeaderComponent={RenderHeader}
                ListFooterComponent={RenderFooter}
                data={statusData}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                            <Image source={{ uri: item.status }} style={{ height: 60, width: 60, borderRadius: 100 }} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 14, color: "black", }}>{item.name}</Text>
                                <Text style={{ fontSize: 14, color: "black", }}>just now</Text>
                            </View>
                        </View>
                    )
                }}

            />
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    container: {
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: "gray",
        marginRight: 15,
        borderRadius: 7,
    },
})


































// import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import FormHeader from '../../components/Button/FormHeader'

// const NotificationScreen = () => {


//     const Item = ({ item }) => {
//         return (
//             <View style={styles.container}>
//                 <View style={{ flexDirection: 'row' }}>
//                     <Image source={require('../../../assets/images/notification.png')} style={{ height: 35, width: 35, tintColor: 'black', }} />
//                     <View style={{ paddingLeft: 10 }}>
//                         <Text style={{ fontSize: 23, fontWeight: 'bold', color: "black" }}>{item.text}</Text>
//                         <Text style={{ fontSize: 15, color: 'black' }}> {item.title}</Text>
//                     </View>


//                 </View>
//             </View>
//         )
//     }

//     const todayData = [
//         {
//             id: 2,
//             text: 'Special Offer',
//             title: 'Today 10:30 PM'
//         },
//         {
//             id: 3,
//             text: 'Special Offer',
//             title: 'Today 10:30 PM'
//         },
//     ]
//     const yesterdayData = [
//         {
//             id: 3,
//             text: 'Special Offer',
//             title: 'Today 10:30 PM'
//         },
//         {
//             id: 4,
//             text: 'Special Offer',
//             title: 'Today 10:30 PM'
//         }, {
//             id: 5,
//             text: 'Special Offer',
//             title: 'Today 10:30 PM'
//         },
//         {
//             id: 6,
//             text: 'Special Offer',
//             title: 'Today 10:30 PM'
//         },
//     ]

//     const RenderHeader = () => {
//         return (
//             <View>
//                 <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginTop: 20 }}> Today</Text>

//                 <FlatList
//                     data={todayData}
//                     showsVerticalScrollIndicator={false}
//                     renderItem={({ item }) => <Item item={item} />}
//                 />

//                 <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginTop: 20 }}> Yesterday</Text>

//             </View>


//         )
//     };


//     const RenderFooter = () => {
//         return (
//             <View style={{ marginTop: 20, marginBottom: 28 }}>
//                 <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black', marginTop: 20 }}> Other</Text>

//                 <FlatList
//                     data={todayData}
//                     showsVerticalScrollIndicator={false}
//                     renderItem={({ item }) => <Item item={item} />}
//                 />

//                 <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>See more</Text>
//             </View>
//         )
//     }

//     return (
//         <View style={styles.page}>
//             <FormHeader title={'Notifications'} />
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}> Last 30 Days</Text>
//                 <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}> All Marks As Read</Text>
//             </View>
//             <FlatList
//                 data={yesterdayData}
//                 showsVerticalScrollIndicator={false}
//                 ListHeaderComponent={RenderHeader}

//                 renderItem={({ item }) => <Item item={item} />}

//                 ListFooterComponent={RenderFooter}
//             />
//         </View>
//     )
// }

// export default NotificationScreen

// const styles = StyleSheet.create({
//     page: {
//         flex: 1,
//         backgroundColor: 'white',
//         paddingTop: 15,
//         paddingHorizontal: 15
//     },
//     container: {
//         height: 85,
//         // width: "50%",
//         borderRadius: 10,
//         backgroundColor: '#D8D8D8',
//         justifyContent: 'center',
//         // alignItems: 'center',
//         marginTop: 15,
//         paddingHorizontal: 50,
//         paddingTop: 10


//     },
// })