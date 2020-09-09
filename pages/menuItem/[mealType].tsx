import { getAllMenuItemIds, getMenuItemsData } from "../../lib/items"
import { useRouter } from "next/router"
import PageTitle from "../../components/PageTitle"
import Container from "react-bootstrap/Container"
import theme from "../../styles/theme"

const FoodItemStyle = {
    color: theme.colors.textColor,
    fontFamily: theme.fontFamily.vibes
}

const Post = ({ foodData }) => {
    const router = useRouter()
    const { id } = router.query

    const foodItem = foodData.find((item: { id: string }) => item.id === id)
    return (
        <Container style={FoodItemStyle}>
            {foodItem &&
                <div>
                    <PageTitle id={foodItem.item} title={foodItem.item} />
                    <p>{foodItem && foodItem.price}</p>
                </div>}
        </Container>
    )
}

export async function getStaticPaths() {
    const paths = getAllMenuItemIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const foodData = await getMenuItemsData(context.params.mealType)
    return {
        props: {
            foodData
        }
    }
}

export default Post