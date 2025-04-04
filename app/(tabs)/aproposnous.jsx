import React from 'react';
import { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Aboutslider from '../components/Aboutslider';
import Albums from '../components/Albums';
import SectionTitle from '../components/SectionTitle';
// import image from '../../assets/images/acc.jpg'
export default function AproposNous() {
  const [showMoreFrench, setShowMoreFrench] = useState(false);
  // const [showMoreArabic, setShowMoreArabic] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Aboutslider />
      <View style={styles.contentContainer}>
        {/* Section Française */}
        <View style={styles.textFrame}>
          <Text style={styles.frameText}>
            Bonjour à toutes et à tous, Je suis le <Text style={{ fontWeight: 'bold'}}>Dr Jamal Nouiti,</Text> directeur de l'établissement Jah de la formation professionnelle à Marrakech.
          </Text>

          {showMoreFrench && (
            <>
              <Text style={styles.frameText}>
                Comme vous le savez, la formation professionnelle a commencé à s'imposer sur le marché du travail et est devenue le principal pilier de la promotion de l'économie nationale, et cela en parallèle avec le développement technologique et scientifique.
              </Text>
              <Text style={styles.frameText}>
                Créée en 2006 et accréditée par l'État, l'école Jah de formation professionnelle délivre des diplômes qui permettent à ses étudiants d'intégrer le monde du travail, que ce soit dans le secteur public ou le secteur privé, ou de créer leurs propres projets tout en leur donnant tous les atouts nécessaires à la réussite.
              </Text>
              <Text style={styles.frameText}>
                Créée en 2006 et accréditée par l'État, l'école Jah de formation professionnelle délivre des diplômes qui permettent à ses étudiants d'intégrer le monde du travail, que ce soit dans le secteur public ou le secteur privé, ou de créer leurs propres projets tout en leur donnant tous les atouts nécessaires à la réussite.
              </Text>
              <Text style={styles.frameText}>
                L'établissement vous propose des diplômes agréés par l'état; qualification opérateur de saisi, technicien, technicien spécialisé, licence professionnelle, et master professionnel dans le domaine de l'administration, de la gestion des entreprises et de l'informatique.
              </Text>
              <Text style={styles.frameText}>
                L'établissement dispense également des formations professionnelles dans divers domaines : informatique, gestion, développement humain et accompagnement, machines de forage et excavateurs, chargeuses sur pneus et chariots élévateurs, journalisme, stylisme et couture, pâtisserie, secourisme, "Cupping Therapy“ ou la thérapie par les ventouses (Hijama), esthétique et cosmétologie, formation de professeurs d'éducation physique, préparateur physique, assistant(e) médical(e), système de sécurité incendie et prévention, langues vivantes, cours de soutien et de renforcement....
              </Text>
              <Text style={styles.frameText}>
                L'établissement occupe une place privilégiée auprès des diplômés en leur assurant le suivi et l'accompagnement nécessaires pour la réalisation de leurs projets, pour ce faire, l'école diversifie les moyens pour maintenir un contact permanent avec les lauréats comme elle organise des réunions et des séances gratuites pour la sensibilisation et l'orientation.
                L'établissement Jah garantit aux étudiants des stages sur terrain, des visites d'entreprises, et des activités culturelles , touristiques et sportives.
              </Text>
            </>
          )}
          <TouchableOpacity
            style={styles.readMoreButton}
            onPress={() => setShowMoreFrench(!showMoreFrench)}
          >
            <Text style={styles.readMoreButtonText}>
              {showMoreFrench ? 'Voir moins' : 'Lire la suite'}
            </Text>
          </TouchableOpacity>
        </View>
          {/* <Image 
          style={styles.image}
          source={image}
          
          /> */}
       
        {/* <View style={styles.textFrame}>
          <Text style={[styles.frameText, styles.arabicText]}>
            السلام عليكم و رحمة الله معكم  <Text style={{ fontWeight: 'bold'}}>الدكتور جمال نويتي</Text> مدير مؤسسة جاه للتكوين المهني الخاص بمراكش
          </Text>

          <Text style={[styles.frameText, styles.arabicText]}>
            كما تعلمون بأن التكوين المهني أصبح يفرض نفسه في سوق الشغل و أصبح الركيزة الأساسية للنهوض باقتصاد البلاد و خصوصا في عصر التكنولوجيا و التطوير العلمي
          </Text>

          {showMoreArabic && (
            <>
              <Text style={[styles.frameText, styles.arabicText]}>
                فمؤسسة جاه أنشأت سنة 2006 وهي معتمدة من طرف الدولة و تعطي دبلومات تسمح لطلبتها إلى الولوج لعالم الشغل سواء في القطاع العام أو القطاع الخاص أو خلق فرص شغل و ذلك بخلق مشاريع مذرة للدخل
              </Text>
              <Text style={[styles.frameText, styles.arabicText]}>
                فالمؤسسة تقترح عليكم دبلومات معتمدة من طرف الدولة تأهيلي، تقني، تقني متخصص، اجازة مهنية، ماستر مهني في مجال الإدارة و التسيير و الإعلاميات.
              </Text>
              <Text style={[styles.frameText, styles.arabicText]}>
                كما تقوم المؤسسة بتكوينات مهنية في مجالات متعددة : اعلاميات، تسيير، التنمية البشرية والمواكبة، الات الحفر والشحن والرافعات الشوكية، صحافة، الفصالة والخياطة، حلويات، اسعافات اولية، الحجامة العصرية، التجميل ، اساتذة تربية بدنية، معد بدني، مساعد طبي، نظام السلامة من الحرائق، لغات حية، دروس الدعم والتقوية....
              </Text>
              <Text style={[styles.frameText, styles.arabicText]}>
                وللتذكير فالمؤسسة لديها مكانة مميزة مع الخريجين من خلال تزويدهم بالمتابعة والدعم اللازمين لإنجاز مشاريعهم ، وللقيام بذلك تقوم المؤسسة بتنويع وسائل التواصل الدائم مع الخريجين حيث تنظم اجتماعات وجلسات مجانية لهم للتوعية والارشاد...
                وتضمن المؤسسة للطلبة تدريبات ميدانية وزيارات لشركات و أنشطة ثقافية وتربوية.
              </Text>
             
            </>
          )}
          <TouchableOpacity
            style={[styles.readMoreButton, styles.arabicButton]}
            onPress={() => setShowMoreArabic(!showMoreArabic)}
          >
            <Text style={[styles.readMoreButtonText, styles.arabicText]}>
              {showMoreArabic ? 'عرض أقل' : 'قراءة المزيد'}
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <SectionTitle title={'NOS ALBUMS'}/>
      <View>
        <Text style={styles.moreText}>
        Bienvenue sur notre page d'albums scolaires ! Parcourez nos souvenirs les plus précieux en photos, de moments de camaraderie aux réalisations académiques.
        </Text>
      </View>
      <Albums />
    </ScrollView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center', // Centre les éléments horizontalement
    width: '100%', // Assure que le header prend toute la largeur
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333333',
    marginTop: 5,
    textAlign: 'left',
  },
  contentContainer: {
    padding: 15,
  },
  textFrame: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  frameText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'left',
  },
  // arabicText: {
  //   textAlign: 'right',
  //   fontFamily: 'Arial',
  // },
  frameText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
    textAlign: 'left',
    marginBottom: 15, // Ajout d'une marge entre les paragraphes
  },
  moreText: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  readMoreButton: {
    backgroundColor: '#e3f2fd',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },

  readMoreButtonText: {
    color: '#1976d2',
    fontSize: 16,
    fontWeight: 'bold',
  },

  arabicButton: {
    alignItems: 'flex-end',
  },

});

