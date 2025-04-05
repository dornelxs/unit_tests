import pytest
from app.validacao import validar_cpf

def test_cpf_valido_formatado():
    assert validar_cpf("529.982.247-25") is True

def test_cpf_valido_nao_formatado():
    assert validar_cpf("52998224725") is True

def test_cpf_invalido_com_digitos_errados():
    assert validar_cpf("123.456.789-00") is False

def test_cpf_invalido_com_digitos_repetidos():
    assert validar_cpf("111.111.111-11") is False

def test_cpf_com_menos_de_11_digitos():
    assert validar_cpf("1234567890") is False

def test_cpf_com_mais_de_11_digitos():
    assert validar_cpf("123456789012") is False

def test_cpf_com_caracteres_invalidos():
    assert validar_cpf("abc.def.ghi-jk") is False
