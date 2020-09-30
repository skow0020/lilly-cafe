import { getAllMenuItemIds, getMenuItemsData } from "../../lib/items"
import { useRouter } from "next/router"
import PageTitle from "../../components/PageTitle"
import Container from "react-bootstrap/Container"
import theme from "../../styles/theme"
import { GetStaticProps, GetStaticPaths } from "next"

const FoodStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const FoodItemStyle = {
    color: theme.colors.bronze,
    fontFamily: theme.fontFamily.vibes
}

const Post: React.FC = ({ foodData }: any) => {
    const router = useRouter()
    const { id } = router.query

    const foodItem = foodData.find((item: { id: string }) => item.id === id)
    return (
        <Container style={FoodStyle}>
            {foodItem &&
                <div>
                    <PageTitle id={id.toString()} title={foodItem.item} />
                    <p style={FoodItemStyle}>{foodItem && foodItem.price}</p>
                    <p style={FoodItemStyle}>{foodItem.description}</p>
                </div>}
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllMenuItemIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context: any) => {
    const foodData = await getMenuItemsData(context.params.mealType)
    return {
        props: {
            foodData
        }
    }
}

export default Post