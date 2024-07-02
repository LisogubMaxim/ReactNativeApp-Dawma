import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

import ArrowBack from "../../../assets/SVG/ArrowBack";
import image1 from "../../../assets/images/PostScreen/image1.png";

import styles from "./postComponentStyles";

const fetchPostById = async ({ queryKey }) => {
    const [_key, { post }] = queryKey;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    return response.data;
};

const PostComponent = ({ navigation, route }) => {
    const { t } = useTranslation();
    const { post } = route.params;

    const {
        data: comments,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["comments", { post }],
        queryFn: fetchPostById,
    });

    if (isLoading) return <Text>Loading...</Text>;

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <ArrowBack />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>{post.title}</Text>
                    <Image source={image1} style={styles.image} />
                </View>

                <View style={styles.about}>
                    <Text style={styles.title}>{t("about")}</Text>
                    <View style={styles.aboutContainer}>
                        <Text style={styles.textAbout}>{post.body}</Text>
                    </View>
                </View>

                <View style={styles.comments}>
                    <Text style={styles.title}>{t("comments")}</Text>
                    <View style={styles.commentsContainer}>
                        {comments.map((comment, index) => (
                            <View key={index} style={styles.comment}>
                                <Text style={styles.name}>{comment.name}</Text>
                                <Text style={styles.email}>{comment.email}</Text>
                                <Text style={styles.body}>{comment.body}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                        <Text style={{ fontFamily: "Inter_600SemiBold", fontSize: 15, color: "#FFFFFF" }}>{t("back")}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default PostComponent;
