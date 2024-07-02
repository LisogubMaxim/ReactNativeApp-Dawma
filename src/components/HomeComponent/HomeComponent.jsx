import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { setPosts } from "../../store/slices/postsSlice";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import AdviseCard from "../ui/AdviseCard/AdviseCard";
import ArrowRight from "../../../assets/SVG/ArrowRight";
import image1 from "../../../assets/images/homeScreen/image1.png";

import styles from "./homeComponentStyles";
import Post from "../ui/Post/Post";

const fetchPosts = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=3`);
    return response.data;
};

const HomeComponent = ({ navigation }) => {
    const user = useSelector((state) => state.user.user);
    const localPosts = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [fetchError, setFetchError] = useState(null);

    const postsMutation = useMutation({
        mutationFn: fetchPosts,
        onSuccess: (data) => {
            dispatch(setPosts(data));
        },
        onError: (error) => {
            setFetchError(error);
            console.error("Failed to fetch posts:", error);
        },
    });

    useEffect(() => {
        postsMutation.mutate();
    }, []);

    if (postsMutation.isLoading) return <Text>Loading...</Text>;

    const displayedPosts = fetchError ? localPosts : postsMutation.data || [];

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{t("yourName")}</Text>
                    <Text style={styles.headerTextName}>
                        {user.firstName} {user.lastName}
                    </Text>
                </View>

                <View style={styles.personalAdvisor}>
                    <View style={styles.personalAdvisorLeft}>
                        <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#06070A", marginBottom: 4 }}>
                            {t("testTask")}
                        </Text>
                        <Text style={{ fontFamily: "Inter_400Regular", fontSize: 13, color: "#858C94", marginBottom: 24 }}>
                            {t("loremIpsum")}
                        </Text>
                        <TouchableOpacity style={styles.goToCall}>
                            <Text style={{ fontFamily: "Inter_500Medium", fontSize: 15, color: "#009E81", marginRight: 46 }}>
                                {t("goToCall")}
                            </Text>
                            <ArrowRight />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.personalAdvisorRight}>
                        <Image source={image1} style={{ height: 127, width: 127, marginLeft: 24 }} />
                    </View>
                </View>

                <View style={styles.beforeYouStart}>
                    <Text style={styles.title}>{t("beforeYouStart")}</Text>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ paddingHorizontal: 16 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={styles.beforeYouStartScroll}>
                            <AdviseCard backgroundColor="#636363" numSteps={2} color={"#FFFFFF"} text={t("linkYou")} />
                            <AdviseCard backgroundColor="#EE6363" numSteps={3} color={"#606773"} text={t("addFunds")} />
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.posts}>
                    <Text style={styles.title}>{t("posts")}</Text>
                    <View style={styles.postList}>
                        {displayedPosts.map((post, index) => (
                            <Post
                                key={index}
                                title={post.title}
                                text={post.body}
                                onPress={() => navigation.navigate("Post", { post: post })}
                            />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeComponent;
