import { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import "./modal.css";
import type { foodData } from '../../interface/FoodData';

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}   

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");  // ← NOVO: estado para mensagem de erro
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        // Limpa erro anterior
        setError("");
        
        // Validação: todos os campos precisam estar preenchidos
        if (title.trim() === "") {
            setError("❌ Título é obrigatório");
            return;
        }
        
        if (price <= 0) {
            setError("❌ Preço deve ser maior que zero");
            return;
        }
        
        if (url.trim() === "") {
            setError("❌ URL da imagem é obrigatória");
            return;
        }
        
        // Se passou por todas as validações, envia
        const foodData: foodData = {
            title: title.trim(),
            price: Number(price),
            url: url.trim()
        }
        mutate(foodData);
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                
                {/* Mensagem de erro */}
                {error && (
                    <div className="error-message" style={{ 
                        backgroundColor: '#ffebee', 
                        color: '#c62828', 
                        padding: '10px', 
                        borderRadius: '4px', 
                        marginBottom: '15px',
                        textAlign: 'center'
                    }}>
                        {error}
                    </div>
                )}
                
                <form className="input-container">
                    <Input label="Título" value={title} updateValue={setTitle}/>
                    <Input label="Preço" value={price} updateValue={setPrice}/>
                    <Input label="URL da Imagem" value={url} updateValue={setUrl}/>
                </form>
                <button onClick={submit} className="btn-secondary" disabled={isLoading}>
                    {isLoading ? 'Enviando...' : 'Cadastrar'}
                </button>
            </div>
        </div>
    )
}