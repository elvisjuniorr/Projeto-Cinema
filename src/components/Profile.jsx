import styles from './profile.module.css'
import React, { useState } from 'react';
import { LuClock4 } from "react-icons/lu";
import { BsCameraReels } from "react-icons/bs";
import { LuCalendarDays } from "react-icons/lu";
import { TbArmchair } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";
import { LuNotebookText } from "react-icons/lu";
import { ImQrcode } from "react-icons/im";
import { HiArrowCircleLeft } from "react-icons/hi";
import { HiArrowCircleRight } from "react-icons/hi";
import { LuDownload } from "react-icons/lu";
import { FiMeh, FiShare2 } from "react-icons/fi";
import { IoReceiptSharp } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { LuWalletCards } from "react-icons/lu";
import { MdContactSupport } from "react-icons/md";
import { BiSolidBook } from "react-icons/bi";
import { TbMessageReportFilled } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import { IoMdAddCircle } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import ModalCard from './ModalCard';

export function Profile (){

    const cinema = String.raw`C{IN}EMA`;

    const filme = {
            id: 1,
            titulo: 'Barbie',
            genero: 'Fantasia',
            diretor: 'Greta Gerwig',
            escritores: 'Greta Gerwig, Noah Baumbach',
            estrelas: 'Margot Robbie, Ryan Gosling',
            disponibilidade: true,
            cidade: 'São Paulo',
            estado: 'SP',
            bairro: 'Vila Mariana',
            unidade: 'Cine Belas Artes',
            data: "12.05.2025",
            idadeMin: 12,
            poster: 'https://resizing.flixster.com/J4xdPjUuyUwx3WCQiA9feOp4_-4=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13472534_p_v12_ah.jpg',
            descricao: 'A boneca Barbie embarca em uma aventura no mundo real, confrontando questões de identidade e propósito.',
            hours: 2,
            minutes: 29, 
        };

    return (
        <section className={styles.profile}>
            <section className={styles.profile_widgets}>
                <button><IoPerson style={{fontSize: "2rem", color: "#d48c29"}}/></button>
                <button><IoTicket style={{fontSize: "2rem", color: "#d48c29"}}/></button>
                <button><IoReceiptSharp style={{fontSize: "2rem", color: "#d48c29"}}/></button>
                <button><LuWalletCards style={{fontSize: "2rem", color: "#d48c29"}}/></button>
                <button><MdContactSupport style={{fontSize: "2rem", color: "#d48c29"}}/></button>
                <button><BiSolidBook style={{fontSize: "2rem", color: "#d48c29"}}/></button>
                <button><TbMessageReportFilled style={{fontSize: "2rem", color: "#d48c29"}}/></button>
                <button><TbLogout style={{fontSize: "2rem", color: "#d48c29"}}/></button>
            </section>
            <section className={styles.profile_page}>
                <section className={styles.profile_user}>
                    <form>
                        <section  className={styles.input_foto}>
                            <label htmlFor="input_foto" >
                                <img src="src/assets/profile.png" alt="Foto de perfil" />
                            </label>
                            <input type="file" id="input_foto" style={{ display: 'none' }} />
                        </section>
                        <label>Nome</label>
                        <input className={styles.input_nome} id='input_nome'></input>
                        <label>Sobrenome</label>
                        <input className={styles.input_sobrenome}></input>
                        <label>E-mail</label>
                        <input className={styles.input_email} id='input_email'></input>
                        <label >Senha</label>
                        <input className={styles.input_senha} id='input_senha' type="password"></input>
                        <button type="submit" id='submit_form'><img src='src/assets/sign_up_button.svg'/></button>
                    </form>
                </section>
                <section className={styles.profile_tickets}>
                    <h3>Meus Ingressos</h3>
                    <section className={styles.ticket_top_bar}>
                        <button><LuDownload style={{fontSize: "3rem" }}/></button>
                        <button><FiShare2 style={{fontSize: "3rem" }}/></button>
                    </section>
                    <section className={styles.tickets}>                
                        <section className={styles.ticket}>
                            <section className={styles.section_movie_informations}>
                                <img src={filme.poster} />
                                <section>
                                    <h3>{filme.titulo}</h3>  
                                    <p><LuClock4 /> {filme.hours} hours {filme.minutes} minutes</p>                                 
                                    <p><BsCameraReels /> {filme.genero} </p>    
                                </section>                           
                            </section>
                            <section className={styles.section_session_informations}>
                                <section>
                                    <LuCalendarDays style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>14h15’</p>
                                        <p>10.12.2022</p>
                                    </section>
                                </section>
                                <section>
                                    <TbArmchair style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>Section 4</p>
                                        <p>Seat H7, H8</p>
                                    </section>
                                </section>
                            </section>
                            <img src="src/assets/line.svg" />
                            <section className={styles.section_ticket_informations}>
                                <section>
                                    <BsCashCoin style={{fontSize: "1.5rem" }}/>   
                                    <p>R$50,00</p>                               
                                </section>
                                <section>
                                    <TfiLocationPin style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>Vincom Ocean Park</p>
                                        <p>4th floor, Vincom Ocean Park, Da Ton, Gia Lam, Ha Noi</p>
                                    </section>
                                </section>
                                <section>
                                    <LuNotebookText style={{fontSize: "2rem" }}/>   
                                    <p>Show this QR code to the ticket counter to receive your ticket</p>                               
                                </section>
                            </section>
                            <section className={styles.section_line}>
                                <div></div>
                                <img src="src/assets/linha_pontilhada.svg" />
                                <div></div>
                            </section>
                            <section className={styles.section_qr_code}>
                                <ImQrcode style={{fontSize: "6rem" }}/>
                                <p>Oder ID: 78889377726</p>
                            </section>
                        </section>    
                        <section className={styles.ticket_example}>
                            <section className={styles.section_movie_informations}>
                                <div></div>
                                <section>
                                    <h3>##########</h3>  
                                    <p><LuClock4 />##########</p>                                 
                                    <p><BsCameraReels />##########</p>    
                                </section>                           
                            </section>
                            <section className={styles.section_session_informations}>
                                <section>
                                    <LuCalendarDays style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>##########</p>
                                        <p>##########</p>
                                    </section>
                                </section>
                                <section>
                                    <TbArmchair style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>##########</p>
                                        <p>##########</p>
                                    </section>
                                </section>
                            </section>
                            <img src="src/assets/line.svg" />
                            <section className={styles.section_ticket_informations}>
                                <section>
                                    <BsCashCoin style={{fontSize: "1.5rem" }}/>   
                                    <p>##########</p>                               
                                </section>
                                <section>
                                    <TfiLocationPin style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>##########</p>
                                        <p>########## ########## ########## ##########</p>
                                    </section>
                                </section>
                                <section>
                                    <LuNotebookText style={{fontSize: "2rem" }}/>   
                                    <p>########## ########## ########## ##########</p>                               
                                </section>
                            </section>
                            <section className={styles.section_line}>
                                <div></div>
                                <img src="src/assets/linha_pontilhada.svg" />
                                <div></div>
                            </section>
                            <section className={styles.section_qr_code}>
                                <ImQrcode style={{fontSize: "6rem" }}/>
                                <p>Oder ID: ##########</p>
                            </section>
                        </section>   
                        <section className={styles.ticket_example}>
                            <section className={styles.section_movie_informations}>
                                <div></div>
                                <section>
                                    <h3>##########</h3>  
                                    <p><LuClock4 />##########</p>                                 
                                    <p><BsCameraReels />##########</p>    
                                </section>                           
                            </section>
                            <section className={styles.section_session_informations}>
                                <section>
                                    <LuCalendarDays style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>##########</p>
                                        <p>##########</p>
                                    </section>
                                </section>
                                <section>
                                    <TbArmchair style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>##########</p>
                                        <p>##########</p>
                                    </section>
                                </section>
                            </section>
                            <img src="src/assets/line.svg" />
                            <section className={styles.section_ticket_informations}>
                                <section>
                                    <BsCashCoin style={{fontSize: "1.5rem" }}/>   
                                    <p>##########</p>                               
                                </section>
                                <section>
                                    <TfiLocationPin style={{fontSize: "2rem" }}/>
                                    <section>
                                        <p>##########</p>
                                        <p>########## ########## ########## ##########</p>
                                    </section>
                                </section>
                                <section>
                                    <LuNotebookText style={{fontSize: "2rem" }}/>   
                                    <p>########## ########## ########## ##########</p>                               
                                </section>
                            </section>
                            <section className={styles.section_line}>
                                <div></div>
                                <img src="src/assets/linha_pontilhada.svg" />
                                <div></div>
                            </section>
                            <section className={styles.section_qr_code}>
                                <ImQrcode style={{fontSize: "6rem" }}/>
                                <p>Oder ID: ##########</p>
                            </section>
                        </section>  
                    </section> 
                    <section className={styles.ticket_bottom_bar}>
                        <button><HiArrowCircleLeft /></button>
                        <button><HiArrowCircleRight /></button>                   
                    </section>    
                </section> 
                <section className={styles.profile_receipts}>
                    <h2>Histórico</h2>
                    <section className={styles.receipts}>
                        <p type="data">20/04/2003</p>
                        <section className={styles.receipt}>
                            <button className={styles.receipt_informations}>
                                <img src={filme.poster}/>
                                <section>
                                    <h4>{filme.titulo}</h4>
                                    <section>
                                        <p><LuClock4 style={{fontSize: "1rem" }}/>{filme.hours}h{filme.minutes}min</p>
                                        <p><LuCalendarDays style={{fontSize: "1rem" }}/>{filme.data}</p>
                                    </section>
                                    <section>
                                        <TfiLocationPin style={{fontSize: "1rem" }}/>
                                        <p>{filme.unidade}, {filme.bairro} - {filme.cidade} ({filme.estado})</p>
                                    </section>
                                </section>
                            </button>
                            <button className={styles.receipt_informations}>
                                <img src={filme.poster}/>
                                <section>
                                    <h4>{filme.titulo}</h4>
                                    <section>
                                        <p><LuClock4 style={{fontSize: "1rem" }}/>{filme.hours}h{filme.minutes}min</p>
                                        <p><LuCalendarDays style={{fontSize: "1rem" }}/>{filme.data}</p>
                                    </section>
                                    <section>
                                        <TfiLocationPin style={{fontSize: "1rem" }}/>
                                        <p>{filme.unidade}, {filme.bairro} - {filme.cidade} ({filme.estado})</p>
                                    </section>
                                </section>
                            </button>
                            <button className={styles.receipt_informations}>
                                <img src={filme.poster}/>
                                <section>
                                    <h4>{filme.titulo}</h4>
                                    <section>
                                        <p><LuClock4 style={{fontSize: "1rem" }}/>{filme.hours}h{filme.minutes}min</p>
                                        <p><LuCalendarDays style={{fontSize: "1rem" }}/>{filme.data}</p>
                                    </section>
                                    <section>
                                        <TfiLocationPin style={{fontSize: "1rem" }}/>
                                        <p>{filme.unidade}, {filme.bairro} - {filme.cidade} ({filme.estado})</p>
                                    </section>
                                </section>
                            </button>
                            <button className={styles.receipt_informations}>
                                <img src={filme.poster}/>
                                <section>
                                    <h4>{filme.titulo}</h4>
                                    <section>
                                        <p><LuClock4 style={{fontSize: "1rem" }}/>{filme.hours}h{filme.minutes}min</p>
                                        <p><LuCalendarDays style={{fontSize: "1rem" }}/>{filme.data}</p>
                                    </section>
                                    <section>
                                        <TfiLocationPin style={{fontSize: "1rem" }}/>
                                        <p>{filme.unidade}, {filme.bairro} - {filme.cidade} ({filme.estado})</p>
                                    </section>
                                </section>
                            </button>
                        </section>
                    </section>
                </section> 
                <section className={styles.profile_wallet}>
                    <h3>Carteira</h3> 
                    <section className={styles.add_card}>
                        <h2>Cadastrar Cartão</h2>
                        <section>
                            <img src='src/assets/wallet.svg' alt='Wallet'/>  
                            <button><IoMdAddCircle style={{color:  "#0066CC", fontSize: "5rem" }}/></button>
                        </section>
                    </section>
                    <section className={styles.credit_card_list}>
                        <h2>Cartão de Crédito</h2> 
                        <section className={styles.style_card}>
                            <ModalCard number="1234 5678 1234 5678" name="Elvis Souza de Oliveira Júnior" cvv="123" cpf="3218368921639" data_venc="12/30" tipo="credito"/>
                            <button><FaRegTrashAlt style={{color:  "white", fontSize: "3rem" }}/></button>
                        </section>
                    </section>
                    <section className={styles.debit_card_list}>
                        <h2>Cartão de Débito</h2>
                        <section className={styles.style_card}>
                            <ModalCard number="1234 5678 1234 5678" name="Elvis Souza de Oliveira Júnior" cvv="123" cpf="3218368921639" data_venc="12/30" tipo="credito"/>
                            <button><FaRegTrashAlt style={{color:  "white", fontSize: "3rem" }}/></button>
                        </section>
                    </section>
                </section>
                <section className={styles.profile_help}>
                    <h3>Ajuda</h3>
                    <section className={styles.doubt_list}>
                        <h2>Dúvidas Frequentes</h2>
                        <section>
                            <p>Quais cartões são aceitos no Cinema como forma de pagamento?</p>
                            <p>Visa, MasterCard, American Express, Hipercard, Diners*, Sodexo* e Elo*.
                            *verificar qual unidade aceita</p>
                        </section>
                        <section>
                            <p>Quem estipula as datas de lançamento de filmes no Brasil?</p>
                            <p>As datas de lançamento dos filmes são estipuladas pelas distribuidoras, sendo que pode-se alterar de cidade para cidade. Por tanto, fique atento a nossa programação e próximos lançamentos!
                            Assim como o lançamento, a legenda e dublagem também fica por conta das distribuidoras.</p>
                        </section>
                        <section>
                            <p>O que define a permanência de um filme em cartaz?</p>
                            <p>O principal quesito é o resultado do filme e o comportamento do público com relação a ele. Mas também temos outras questões como: número de filmes em cartaz, número de salas no complexo, negociação com as distribuidoras…</p>
                        </section>
                        <section>
                            <p>Posso cancelar ou trocar meu ingresso comprado online?</p>
                            <p>Uma vez concluída a compra do(s) ingresso(s), o usuário poderá se arrepender da compra, sendo certo que o reembolso do valor(es) do(s) ingresso(s) será (ao) efetuado (s), desde que essa solicitação seja feita pelo usuário em até 7 (sete) dias da data da compra, observado o prazo mínimo de até 24 (vinte e quatro) horas antes do horário do filme. Sendo assim, para compras realizadas próximas do horário do filme, os ingressos só poderão ser cancelados em até 24 (vinte e quatro) horas antes do horário do filme.</p>
                        </section>
                        <section>
                            <p>Porque alguns filmes entram em determinadas unidades e em outras não?</p>
                            <p>Algumas vezes, por estratégia da distribuidora do filme, não é interessante lançar em determinado complexo ou determinada cidade. Dependemos em um primeiro momento da decisão deles. Aí então entramos em negociação com relação ao número mínimo de sessões e quanto tempo o filme deverá se manter em cartaz, viabilizando ou não o lançamento do filme.</p>
                        </section>
                    </section>
                    <section className={styles.help_contact}>
                        <h2>Falar com o Suporte</h2>
                        <section className={styles.contact_list}>
                            <p>email: <span>suporte@cin.com</span></p>
                            <p>tel (Região Sul): <span>(21) 98877-6655</span></p>
                            <p>tel (Demais Regiões): <span>(21) 94433-2211</span></p>
                        </section>
                    </section>
                </section>
                <section className={styles.profile_terms_of_use}>
                    <h3>Termos e Condições</h3>
                    <div className={styles.terms_of_use}>
                        <p>Ao acessar esta página, você reconhece ter lido e entendido seu conteúdo e declara estar de acordo com o mesmo.</p>

                        <p>O conteúdo desta página, assim como suas atualizações, é de propriedade exclusiva de {cinema}, e se encontra protegido pelas leis da República Federativa do Brasil, bem como pelo Direito Internacional.</p>

                        <p>O conteúdo deste site deve ser utilizado apenas como um recurso de publicidade, informação e compra de bens e serviços comercializados por {cinema} ou suas empresas subsidiárias, afiliadas ou associadas.</p>

                        <p>É estritamente proibido qualquer tipo de uso, incluindo publicitário, reprodução, exibição, execução ou comercialização do conteúdo deste website, incluindo marcas ou avisos comerciais, em qualquer rede de computadores, página da Internet ou mídia diversa, sem o prévio consentimento por escrito de {cinema}.</p>

                        <p>A marca {cinema}, em suas diferentes classes e tipos, encontra-se devidamente registrada e seu uso total ou parcial é estritamente proibido.</p>

                        <p>Todas as marcas mencionadas neste site, seu conteúdo, incluindo gráficos, fotografias, textos, informações e os programas associados de computador, são direitos reservados de {cinema} ou a ela cedidos contratualmente.</p>

                        <p>A informação contida neste website é apenas enunciativa, não constituindo, de nenhuma forma, uma oferta vinculante que obrigue o usuário e {cinema} a celebrar qualquer tipo de contrato.</p>

                        <p>{cinema} declara o seguinte:</p>
                        <ul>
                            <li>Todos os contratantes de eventos na sala precisam assinar, assim como clientes de sessões normais da programação.</li>
                            <li>Se reserva o direito de modificar as informações aqui contidas quando julgar conveniente e sem aviso prévio, podendo, inclusive, limitar ou não permitir o acesso à referida informação.</li>
                            <li>Não se responsabiliza por danos ou prejuízos causados em virtude do acesso ou má utilização dos conteúdos deste site.</li>
                            <li>Não se responsabiliza pelas possíveis discrepâncias entre a versão de seus documentos impressos e a versão eletrônica dos mesmos publicados neste site.</li>
                            <li>Não assume qualquer responsabilidade decorrente da troca de informações eletrônicas entre os usuários da rede de Internet, nem por problemas técnicos que possam ocorrer nos equipamentos utilizados durante a conexão.</li>
                        </ul>

                        <p>As transações realizadas através do portal de {cinema} e suas empresas subsidiárias ou afiliadas serão regidas pelos termos e condições estabelecidos pelo Código Civil Brasileiro, pelo Código de Defesa do Consumidor e demais legislações específicas, quando aplicável.</p>

                        <p>{cinema} elege o foro da cidade de São Paulo, Estado de São Paulo, para dirimir qualquer controvérsia decorrente da aplicação das referidas leis, renunciando expressamente a qualquer outra jurisdição, por mais privilegiada que seja.</p>

                        <p><strong>Política de Segurança de Dados Pessoais</strong></p>

                        <p>Os dados pessoais dos clientes contidos neste site são utilizados exclusivamente para identificação em operações de compra e não são compartilhados com terceiros, exceto em casos de solicitação judicial.</p>

                        <p><strong>Políticas de Privacidade e Segurança</strong></p>

                        <p>{cinema} se compromete a garantir a confidencialidade e privacidade das informações pessoais obtidas através de seus serviços online. Sugerimos que você leia as normas descritas a seguir para entender como sua informação pessoal será tratada.</p>

                        <p>Estas normas de confidencialidade estão sujeitas a alterações, portanto, recomendamos que sejam revistas periodicamente.</p>

                        <p><strong>1 - Tipo de informação pessoal obtida:</strong></p>

                        <p>As informações pessoais inseridas voluntariamente em nosso site estão sujeitas às normas de confidencialidade e privacidade, incluindo dados referentes à criação de perfil, inscrição em notificações de ofertas especiais, registros em programas de fidelidade e participação em concursos, sorteios e pesquisas online.</p>

                        <p>Os dados coletados variam conforme o programa e são armazenados separadamente para garantir maior segurança.</p>

                        <p><strong>Contato online:</strong> as informações solicitadas nesta seção permitem que {cinema} entre em contato com os clientes quando necessário, incluindo nome, e-mail, telefone e empresa em que trabalha.</p>

                        <p><strong>Programa de notificação de ofertas:</strong> os visitantes podem fornecer informações como nome, e-mail, endereço, país e preferências. Esses dados podem ser modificados a qualquer momento e são usados para personalizar as promoções enviadas.</p>

                        <p><strong>Envio de mensagens eletrônicas:</strong> são coletados dados como nome do remetente e destinatário, e-mail, faixa etária, país e CEP para personalizar avisos e promoções.</p>

                        <p><strong>Concursos, sorteios e pesquisas online:</strong> podem ser solicitadas informações variadas, incluindo preferências e opiniões sobre os serviços prestados, para avaliação e melhoria contínua.</p>

                        <p>Após o recebimento, os dados são armazenados em um servidor seguro protegido por firewall. No entanto, nenhuma transmissão de dados pela Internet é 100% segura. {cinema} se esforça para proteger suas informações, mas não pode garantir segurança absoluta na transmissão dos dados.</p>

                        <p><strong>2 - Como sua informação pessoal é utilizada?</strong></p>

                        <p>{cinema} utiliza as informações fornecidas para estudos internos sobre dados demográficos, interesses e comportamento dos usuários. O objetivo é proporcionar uma experiência personalizada e aprimorar produtos e serviços.</p>

                        <p>No programa de notificação de ofertas, apenas {cinema} tem acesso às informações coletadas, e o usuário pode modificar suas preferências a qualquer momento.</p>

                        <p><strong>3 - O que são cookies e como são utilizados?</strong></p>

                        <p>Cookies são pequenas informações enviadas pelo site ao navegador do usuário. Eles são armazenados no dispositivo e permitem personalizar a experiência, rastrear preferências e medir a audiência do site.</p>

                        <p>Os cookies ajudam a reconhecer o usuário ao acessar o site, lembrar suas preferências e melhorar a navegação.</p>

                        <p><strong>4 - Confidencialidade da informação:</strong></p>

                        <p>Os dados pessoais coletados são compartilhados apenas com {cinema}, salvo exceções legais. A empresa não vende nem aluga informações dos usuários e só as compartilha com parceiros comerciais mediante consentimento do usuário.</p>

                        <p><strong>5 - Modificação / atualização da informação:</strong></p>

                        <p>O usuário pode modificar seus dados a qualquer momento. Caso não deseje mais receber promoções, poderá cancelar sua inscrição.</p>

                        <p><strong>6 - Proteção à informação pessoal:</strong></p>

                        <p>Os dados do usuário são protegidos por um identificador pessoal, de conhecimento exclusivo do usuário. Recomendamos não compartilhar senhas e encerrar sessões ao utilizar dispositivos públicos.</p>

                        <p><strong>7 - Confidencialidade dos menores:</strong></p>

                        <p>{cinema} não solicita informações pessoais de menores sem o consentimento dos responsáveis. Crianças devem obter permissão antes de compartilhar dados pessoais online.</p>

                        <p><strong>8 - Aceitação dos termos:</strong></p>

                        <p>O uso dos serviços de {cinema} implica a aceitação dos termos e condições aqui descritos. Caso o usuário não concorde, não deverá fornecer informações pessoais nem utilizar os serviços do site.</p>

                        <p><strong>9 - Princípios mínimos de nossa política de privacidade:</strong></p>

                        <p>{cinema} se compromete a proteger a privacidade dos usuários e garantir a segurança das informações coletadas.</p>
                    </div>
                </section>
            </section>         
        </section>
    )
}

