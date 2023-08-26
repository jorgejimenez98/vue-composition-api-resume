import axios from "axios"
import { ref } from "vue"

const usePokemon = (id) => {
    const pokemon = ref()
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchPokemon = async () => {
        isLoading.value = true
        try {
            const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            pokemon.value = data
            errorMessage.value = null
        } catch (error) {
            errorMessage.value = 'Error on get pokemon'
        } finally {
            isLoading.value = false
        }
    }

    searchPokemon()
    
    return {
        pokemon,
        isLoading,
        errorMessage
    }
}

export default usePokemon