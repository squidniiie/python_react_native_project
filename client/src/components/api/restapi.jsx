// import { View, Text, StyleSheet, ActivityIndicator, FlatList, SafeAreaView } from 'react-native'
// import React, { useState, useEffect } from 'react'
// const movies = 'https://reactnative.dev/movies.json'
// const restapi = () => {
        // const renderData = (item) => {
    //     return (
    //         <View>
    //             <Text>{item.name}</Text>
    //             <Text>{item.description}</Text>
    //         </View>
    //     )
    // }
    // useEffect(() => {
    //     fetch(movies)
    //         .then((response) => response.json())
    //         .then((json) => {
    //             setData(json.movies)
    //             // setTitle(json.title)
    //         })
    //         .catch((error) => alert(error))
    //         .finally(() => setLoading(false))
    // }, []);

    // return (
    //     <SafeAreaView style={styles.container}>
    //         <Text style={styles.title}>Messages</Text>
    //         {isLoading ? (<ActivityIndicator />) :
    //             (
    //                 // <Text>{title}</Text>
    //                 <FlatList
    //                     data={data}
    //                     keyExtractor={({ id }, index) => id}
    //                     renderItem={({ item }) => (
    //                         <Text>
    //                             {item.title}
    //                             {item.releaseYear}
    //                         </Text>
    //                     )}
    //                 />
    //             )}

    //     </SafeAreaView>
    // )

// }

// export default restapi